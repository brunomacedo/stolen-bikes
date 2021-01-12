<p align="center">
  <a href="https://stolen-bikes-index.herokuapp.com/" target="_blank">
    <img src="_docs/berliner_polizei.svg" width="120" />
  </a>
</p>

<h1 align="center">Stolen Bike Index</h1>

<p align="center">
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
- Setup (*Install and configure*) [[click here]](#setup)
- Development (*Commands*) [[click here]](#development)
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
FAST_REFRESH=false
PORT=3001
REACT_APP_BIKE_API=https://bikewise.org/api/v2
```

### Install packages dependencies

Run the command below from this root path

```terminal
yarn or npm install
```


<br>
<a name="development"></a>

## **Development** (*Run local commands*)
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

- [X] I want to see a list of reported bike thefts for the Berlin area.
- [X] I want to see the first 10 bike theft cases, with the ability to - paginate (10 cases per page).
- [X] I want to see a total number of bike theft cases.
- [X] For each reported bike theft I want to see:
  - [X] Case title
  - [X] Case description
  - [X] Date of the theft
  - [X] Date of when the case was reported
  - [X] Location of the theft
  - [X] Picture of the bike, if available
- [X] I want to filter reported bike thefts by partial case title.
- [ ] I want to filter reported bike thefts by date range.
- [X] I want to see a loading state until the list is available.
- [ ] I want to see an error state if the list is unavailable.
- [X] I want to see an empty state if there are no results.
