#!/bin/bash

delete_merged_branches() {
  local mode=$1

  case $mode in
    --list)
      echo "Starting branch cleanup process in dry-run mode (listing only)..."
      ;;
    --delete)
      echo "Starting branch cleanup process in delete mode (branches will be deleted)..."
      ;;
    *)
      echo "Invalid option. Use --list to simulate or --delete to delete."
      exit 1
      ;;
  esac

  echo

  # Fetch all branches and prune deleted ones
  git fetch --prune || { echo "Error fetching branches"; exit 1; }

  # Determine the default branch dynamically
  default_branch=$(git remote show origin | grep 'HEAD branch' | awk '{print $NF}')
  if [ -z "$default_branch" ]; then
    echo "Error: Could not determine the default branch. Exiting."
    exit 1
  fi

  # Get current date in epoch seconds
  current_date=$(date +%s)

  # Get all remote branches excluding HEAD and tags
  branches=$(git branch -r | grep -v 'origin/HEAD' | grep -v 'tags/' | sed 's/origin\///')

  if [ -z "$branches" ]; then
    echo "No branches found. Exiting."
    exit 0
  fi

  for branch_name in $branches; do
    # Skip the default branch
    if [ "$branch_name" = "$default_branch" ]; then
      echo "Skipping default branch: $branch_name"
      continue
    fi

    # Check if the branch is protected
    if git config --get branch."$branch_name".protected > /dev/null 2>&1; then
      echo "Skipping protected branch: $branch_name"
      continue
    fi

    # Check if the branch is merged
    if git branch -r --merged "origin/$default_branch" | grep -qw "origin/$branch_name"; then
      if [ "$mode" = "--delete" ]; then
        # Uncomment the line below to actually delete the branch
        # git push origin --delete "$branch_name" || echo "Failed to delete branch $branch_name"
        echo "Deleting: $branch_name"
      else
        echo "Dry-run: $branch_name would be deleted."
      fi
      continue
    fi

    # Get the last commit date of the branch in epoch seconds
    last_commit_date=$(git log -1 --format=%ct "origin/$branch_name" 2>/dev/null)

    if [ -z "$last_commit_date" ]; then
      echo "Error: Could not retrieve last commit date for branch $branch_name. Skipping."
      continue
    fi

    # Calculate branch age in seconds
    branch_age=$((current_date - last_commit_date))

    # Check if the branch is older than 1 month (30 days)
    if [ $branch_age -gt $((30 * 24 * 60 * 60)) ]; then
      if [ "$mode" = "--delete" ]; then
        # Uncomment the line below to actually delete the branch
        # git push origin --delete "$branch_name" || echo "Failed to delete branch $branch_name"
        echo "Deleting: $branch_name"
      else
        echo "Dry-run: $branch_name would be deleted."
      fi
    else
      echo "Branch $branch_name is newer than 1 month; skipping."
    fi
  done

  echo
  echo "Branch cleanup process completed."
}

# Check if a mode was passed as argument
if [ $# -eq 0 ]; then
  echo "Usage: $0 --list | --delete"
  exit 1
fi

delete_merged_branches "$1"
