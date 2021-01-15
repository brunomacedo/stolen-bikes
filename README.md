<p align="center">
  <a href="https://stolen-bikes-index.herokuapp.com/" target="_blank">
    <img src="_docs/berliner_polizei.svg" width="120" />
  </a>
</p>

<h1 align="center">Stolen Bike Index</h1>

<p align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/brunomacedo/stolen-bikes">
  <a href="https://stolen-bikes-index.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/-development-red" />
  </a>
  <a href="https://stolen-bikes-index-app.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/-production-purple" />
  </a>
  <a href="#setup">
    <img src="https://img.shields.io/badge/-setup-blue" />
  </a>
  <a href="#changelog" target="_blank">
    <img src="https://img.shields.io/badge/-changelog-grey" />
  </a>
</p>

This project has developed using React, TypeScript, Styled-Components, ESLint and follow the Git Flow praticses.

<br>

<!-- ![Mobile-GIF](_docs/stolen-bykes.gif) -->

# <img src="_docs/berliner_polizei.svg" width="20" valign="middle" /> **Table content**

- Develop Requirements [[click here]](#requirements)
- Setup (_Install and configure_) [[click here]](#setup)
- Development (_Commands_) [[click here]](#development)
- Changelog [[click here]](#changelog)
- Product Requirements [[click here]](#todo)

<br>
<a name="requirements"></a>

## **Requirements to development**

- node >=14
- npm >=6
- vscode (include extensions)

### vscode extension

- ESLint
- Prettier

<br>
<a name="setup"></a>

## **Initial setup**

### Create `.env` file

```bash
FAST_REFRESH=false # if Windows
PORT=3001
REACT_APP_BIKE_API=https://bikewise.org/api/v2
REACT_APP_GOOGLE_KEY=REPLACE_YOUR_KEY_HERE
```

### Install packages dependencies

Run the command below from this root path

```terminal
yarn or npm install
```

<br>
<a name="development"></a>

## **Development** (_Run local commands_)

[https://localhost:4000/](https://localhost:4000/)

#### Run server

```terminal
yarn dev or npm run dev
```

<br>
<a name="changelog"></a>

## Changelog [[click here]](CHANGELOG.md)

Based on Conventional Changelog [[here]](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

### How it works?

If this is your first time using this tool and you want to generate all previous changelogs, you could do

```
conventional-changelog -p angular -i CHANGELOG.md -s -r 0
```

This will overwrite any previous changelogs if they exist.

All available command line parameters can be listed using CLI: `conventional-changelog --help`.

**Hint:** You can alias your command or add it to your package.json. EG: `"changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"`.

<br>
<a name="todo"></a>

## **Product Requirements**

As a police officer:

- [x] I want to see a list of reported bike thefts for the Berlin area.
- [x] I want to see the first 10 bike theft cases, with the ability to - paginate (10 cases per page).
- [x] I want to see a total number of bike theft cases.
- [x] For each reported bike theft I want to see:
  - [x] Case title
  - [x] Case description
  - [x] Date of the theft
  - [x] Date of when the case was reported
  - [x] Location of the theft
  - [x] Picture of the bike, if available
- [x] I want to filter reported bike thefts by partial case title.
- [x] I want to filter reported bike thefts by date range.
- [x] I want to see a loading state until the list is available.
- [ ] I want to see an error state if the list is unavailable.
- [x] I want to see an empty state if there are no results.
