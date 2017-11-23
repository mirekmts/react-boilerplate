# Frontend boilerplate
This project is a boilerplate for my React (actually Preact) projects.

## How to get it to work
1. `npm install`
2. `npm start`

And that's it!<br>
There are also 3 more scripts to note:
* `npm run build` – builds your project to production (UglifyJS, PurifyCSS, etc.)
* `npm run monitor` – same as above but also launches [webpackmonitor](https://github.com/webpackmonitor/webpackmonitor)
* `npm run deploy` – deploys app to gh-pages (see: #deployment)

## Config
In `package.json`:

### Html webpack template
`config` property specifies [html-webpack-template config](https://github.com/jaketrent/html-webpack-template#basic-usage)

### Deployment
To deploy to your repository change `repository` property to resemble your settings. Note the additional `ghbranch` property. It is a name of branch that script will force push every time you launch deploy script.
