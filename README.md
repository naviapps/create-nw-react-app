# Create NW.js React App

Create NW.js React apps with no build configuration.

* [Getting Started](#getting-started) – How to create a new app.
* [User Guide](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md) – How to develop apps bootstrapped with Create NW.js React App.

Create NW.js React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/naviapps/create-nw-react-app/issues/new).

*Language: English / [日本語](https://github.com/naviapps/create-nw-react-app/blob/master/doc/README.ja.md)*

## Quick Overview

```sh
npm install -g create-nw-react-app

create-nw-react-app my-app
cd my-app/
npm start
```

Then see your app.<br>
When you’re ready to release to production, create a minified app with `npm run build`.

<img src='https://raw.githubusercontent.com/naviapps/create-nw-react-app/master/.github/npm_start.png' width='600' alt='npm start'>

### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Just create a project, and you’re good to go.

## Getting Started

### Installation

Install it once globally:

```sh
npm install -g create-nw-react-app
```

**You’ll need to have Node >= 6 on your machine**. You can use [nvm](https://github.com/creationix/nvm#installation) to easily switch Node versions between different projects.

**This tool doesn’t assume a Node backend**. The Node installation is only required for Create NW.js React App itself.

### Creating an App

To create a new app, run:

```sh
create-nw-react-app my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── index.html
├── .gitignore
├── public
│   └── favicon.ico
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can run some commands inside the project folder:

### `npm start` or `yarn start`

Runs the app in development mode.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<img src='https://raw.githubusercontent.com/naviapps/create-nw-react-app/master/.github/build_errors.png' width='600' alt='Build errors'>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be released.

## User Guide

The [User Guide](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md) includes information on different topics, such as:

- [Folder Structure](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#folder-structure)
- [Available Scripts](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#available-scripts)
- [Supported Language Features and Polyfills](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#syntax-highlighting-in-the-editor)
- [Adding a Stylesheet](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#adding-a-stylesheet)
- [Post-Processing CSS](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#post-processing-css)
- [Adding a CSS Preprocessor (Sass, Less etc.)](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
- [Adding Images, Fonts, and Files](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#adding-images-fonts-and-files)

A copy of the user guide will be created as `README.md` in your project folder.

## How to Update to New Versions?

Please refer to the [User Guide](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#updating-to-new-releases) for this and other information.

## Philosophy

* **One Dependency:** There is just one build dependency. It uses Webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

* **No Configuration Required:** You don't need to configure anything. Reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

* **No Lock-In:** You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

## Why Use This?

**If you’re getting started** with NW.js React, use `create-nw-react-app` to automate the build of your app. There is no configuration file, and `nw-react-scripts` is the only extra build dependency in your `package.json`. Your environment will have everything you need to build a modern NW.js React app:

* NW.js, React, JSX, ES6, and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* A dev server that lints for common errors.
* Import CSS and image files directly from JavaScript.
* Autoprefixed CSS, so you don’t need `-webkit` or other prefixes.
* A `build` script to bundle JS, CSS, and images for production, with sourcemaps.
* An offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), meeting all the [Progressive Web App](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#making-a-progressive-web-app) criteria.

**The feature set is intentionally limited**. It doesn’t support advanced features such as server rendering or CSS modules. The tool is also **non-configurable** because it is hard to provide a cohesive experience and easy updates across a set of tools when the user can tweak anything.

**You don’t have to use this.** Historically it has been easy to [gradually adopt](https://www.youtube.com/watch?v=BF58ZJ1ZQxY) NW.js React. However many people create new single-page NW.js React apps from scratch every day. We’ve heard [loud](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) and [clear](https://twitter.com/thomasfuchs/status/708675139253174273) that this process can be error-prone and tedious, especially if this is your first JavaScript build stack. This project is an attempt to figure out a good way to start developing NW.js React apps.

### Converting to a Custom Setup

**If you’re a power user** and you aren’t happy with the default configuration, you can “eject” from the tool and use it as a boilerplate generator.

Running `npm run eject` copies all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. Commands like `npm start` and `npm run build` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Limitations

Some features are currently **not supported**:

* Server rendering.
* Some experimental syntax extensions (e.g. decorators).
* CSS Modules (see [#2285](https://github.com/facebookincubator/create-react-app/pull/2285)).
* Importing LESS or Sass directly ([but you still can use them](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)).
* Hot reloading of components.

Some of them might get added in the future if they are stable, are useful to majority of NW.js React apps, don’t conflict with existing tools, and don’t introduce additional configuration.

## What’s Inside?

The tools used by Create NW.js React App are subject to change.
Currently it is a thin layer on top of many amazing community projects, such as:

* [webpack](https://webpack.js.org/) with [webpack-dev-server](https://github.com/webpack/webpack-dev-server), [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) and [style-loader](https://github.com/webpack/style-loader)
* [Babel](http://babeljs.io/) with ES6 and extensions used by Facebook (JSX, [object spread](https://github.com/sebmarkbage/ecmascript-rest-spread/commits/master), [class properties](https://github.com/jeffmo/es-class-public-fields))
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [ESLint](http://eslint.org/)
* [Jest](http://facebook.github.io/jest)
* and others.

All of them are transitive dependencies of the provided npm package.

## Contributing

We'd love to have your helping hand on `create-nw-react-app`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.
