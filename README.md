# Create NW.js React App

Create NW.js React apps with no build configuration.

* [Getting Started](#getting-started) – How to create a new app.
* [User Guide](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md) – How to develop apps bootstrapped with Create NW.js React App.

Create NW.js React App works on macOS, Windows, and Linux.<br>
If something doesn’t work please [file an issue](https://github.com/naviapps/create-nw-react-app/issues/new).

## Quick Overview

```sh
npm install -g create-nw-react-app

create-nw-react-app my-app
cd my-app/
npm start
```

Then open app and [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to release to production, create a minified bundle with `npm run build`.

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

Runs the app in development mode.<br>
Open app and [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

Your app is ready to be released.

## User Guide

- [Folder Structure](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#folder-structure)

A copy of the user guide will be created as `README.md` in your project folder.
