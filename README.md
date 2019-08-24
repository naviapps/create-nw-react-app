# Create NW.js React App

Create NW.js React apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md) – How to develop apps bootstrapped with Create NW.js React App.

Create NW.js React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/naviapps/create-nw-react-app/issues/new).

## Quick Overview

```sh
npx create-nw-react-app my-app
cd my-app
npm start
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open to see your app.<br>
When you’re ready to release to production, create a minified app with `npm run build`.

<p align='center'>
<img src='https://raw.githubusercontent.com/naviapps/create-nw-react-app/master/.github/npm_start.png' width='600' alt='npm start'>
</p>

### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Just create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-nw-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init nw-react-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create nw-react-app my-app
```

_`yarn create` is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open to view it in the app.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://raw.githubusercontent.com/naviapps/create-nw-react-app/master/.github/build_errors.png' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be released.

## User Guide

[Create NW.js React App documentation](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md) TODO

You can find detailed instructions on using Create React App and many tips in [its documentation](https://facebook.github.io/create-react-app/).

## How to Update to New Versions?

Please refer to the [User Guide](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#updating-to-new-releases) for this and other information.

## Philosophy

- **One Dependency:** There is just one build dependency. It uses Webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

- **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

- **No Lock-In:** You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

## What’s Included?

Your environment will have everything you need to build a modern single-page NW.js React app:

- NW.js, React, JSX, ES6, TypeScript and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
- An offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), meeting all the [Progressive Web App](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#making-a-progressive-web-app) criteria.
- Hassle-free updates for the above tools with a single dependency.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#npm-run-eject) and customize it, but then you will need to maintain this configuration.

## Contributing

We'd love to have your helping hand on `create-nw-react-app`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## License

Create NW.js React App is open source software [licensed as MIT](https://github.com/naviapps/create-nw-react-app/blob/master/LICENSE).
