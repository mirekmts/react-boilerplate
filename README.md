# React boilerplate

This project is a boilerplate for my React projects.<br>
(For non React boilerplate see https://github.com/bibixx/frontend-boilerplate/)

## How to get it to work

### NPM

1. `npm install`
2. `npm start`

And that's it!<br>
There are also 3 more scripts to note:

* `npm run build` – builds your project to production (UglifyJS, PurifyCSS, etc.)
* `npm run analize` – same as above but also analizes your bundle with [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

### File structure

```
┌── build        – here is where all webpack files are located
├── dist         – your output after build will be put here
├── src          – all your app files lay here
|   ├── js       – all actual JS lays here
|   ├── sass
|   |   └── variables.sass – this file will be included into every other .sass file so you should (as filename says) put here only variables, mixins, etc.
|   └── index.js – imports js/app.js (main JS file)
├── public       – all files from this folder will be copied 1 to 1 to dist folder after compilation
|   └── favicon.png – favicons for apple, android, .ico files etc. will be generated from this file
├── assets       – paths for images in js and sass files will be resolved to this folder
└── tailwind.js  – configuration of tailwind
```

## What is included

* Webpack for building
* Webpack-dev-server for development watching
* React
* React Router
* Redux
* Redux Saga
* Immutable.js
* Autoprefixer
* [Tailwind CSS](https://tailwindcss.com/)
* SASS
* Babel transpiling (stage-0)
* Linting for SASS ([sass-lint](https://github.com/sasstools/sass-lint)) and JS ([ESLint](https://eslint.org/)). Set up mostly according to [Airbnb Style Guide](https://github.com/airbnb/javascript) but with my small changes.
* Browserslist

## Todo

* [x] Redux
* [x] More useful blank project
* [ ] Tests
