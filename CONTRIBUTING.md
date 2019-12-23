# Contributing to Create NW.js React App

Loving Create NW.js React App and want to get involved? Thanks! There are plenty of ways you can help.

Please take a moment to review this document in order to make the contribution process straightforward and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Core Ideas

As much as possible, we try to avoid adding configuration and flags. The purpose of this tool is to provide the best experience for people getting started with NW.js and React, and this will always be our first priority. This means that sometimes we [sacrifice additional functionality](https://gettingreal.37signals.com/ch05_Half_Not_Half_Assed.php) (such as server rendering) because it is too hard to solve it in a way that wouldn’t require any configuration.

We prefer **convention, heuristics, or interactivity** over configuration.<br>
Here are a few examples of them in action.

### Convention

<!--alex disable easy-->

Instead of letting the user specify the entry filename, we always assume it to be `src/index.js`. Rather than letting the user specify the output bundle name, we generate it, but make sure to include the content hash in it. Whenever possible, we want to leverage convention to make good choices for the user, especially in cases where it’s easy to misconfigure something.

### Heuristics

Normally, `npm start` runs on port `3000`, and this is not explicitly configurable. However, some environments like cloud IDEs want the programs to run on a specific port to serve their output. We want to play well with different environments, so Create NW.js React App reads `PORT` environment variable and prefers it when it is specified. The trick is that we know cloud IDEs already specify it automatically, so there is no need for the user to do anything. Create NW.js React App relies on heuristics to do the right thing depending on environment.

<!--alex disable just-->

Another example of this is how `npm test` normally launches the watcher, but if the `CI` environment variable is set, it will run tests once. We know that popular CI environments set this variable, so the user doesn’t need to do anything. It just works.

### Interactivity

We prefer to add interactivity to the command line interface rather than add configuration flags. For example, `npm start` will attempt to run with port `3000` by default, but it may be busy. Many other tools fail in this case and ask that you pass a different port, but Create NW.js React App will display a prompt asking if you’d like to run the app on the next available port.

Another example of interactivity is `npm test` watcher interface. Instead of asking people to pass command line flags for switching between test runner modes or search patterns, we print a hint with keys that you can press during the test session to instruct watcher what to do. Jest supports both flags and interactive CLI but Create NW.js React App prefers long-running sessions to keep user immersed in the flow over short-running sessions with different flags.

### Breaking the Rules

No rules are perfect. Sometimes we may introduce flags or configuration if we believe the value is high enough to justify the complexity. For example, we know that apps may be hosted paths different from the root, and we need to support this use case. However, we still try to fall back to heuristics when possible. In this example, we ask that you specify `homepage` in `package.json`, and infer the correct path based on it. We also nudge the user to fill out the `homepage` after the build, so the user becomes aware that the feature exists.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope for Create NW.js React App. Generally always have a related issue with discussions for whatever you are including.

Please also provide a **test plan**, i.e. specify how you verified that your addition works.

## Folder Structure of Create NW.js React App

`create-nw-react-app` is a monorepo, meaning it is divided into independent sub-packages.<br>
These packages can be found in the [`packages/`](https://github.com/naviapps/create-nw-react-app/tree/master/packages) directory.

### Overview of directory structure

```
packages/
  create-nw-react-app/
  eslint-config-nw-react-app/
  nw-react-scripts/
```

### Package Descriptions

#### [create-nw-react-app](https://github.com/naviapps/create-nw-react-app/tree/master/packages/create-nw-react-app)

The global CLI command code can be found in this directory, and shouldn't often be changed. It should run on Node 0.10+.

#### [eslint-config-nw-react-app](https://github.com/naviapps/create-nw-react-app/tree/master/packages/eslint-config-nw-react-app)

This package contains a conservative set of rules focused on making errors apparent and enforces no style rules.<br>
This package is enabled by default for all `create-nw-react-app` scaffolded applications.

#### [nw-react-scripts](https://github.com/naviapps/create-nw-react-app/tree/master/packages/nw-react-scripts)

This package is the heart of the project, which contains the scripts for setting up the development server, building production builds, configuring all software used, etc.<br>
All functionality must be retained (and configuration given to the user) if they choose to eject.

## Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/naviapps/create-nw-react-app`

2. Run `yarn` in the root `create-nw-react-app` folder.

Once it is done, you can modify any file locally and run `yarn start`, `yarn test` or `yarn build` like you can in a generated project.

If you want to try out the end-to-end flow with the global CLI, you can do this too:

```sh
yarn create-nw-react-app my-app
cd my-app
```

and then run `yarn start` or `yarn build`.

## Tips for contributors using Windows

The scripts in tasks folder and other scripts in `package.json` will not work in Windows out of the box. However, using [Bash on windows](https://msdn.microsoft.com/en-us/commandline/wsl/about) makes it easier to use those scripts without any workarounds. The steps to do so are detailed below:

### Install Bash on Ubuntu on Windows

A good step by step guide can be found [here](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

### Install Node.js and yarn

Even if you have node and yarn installed on your windows, it would not be accessible from the bash shell. You would have to install it again. Installing via [`nvm`](https://github.com/creationix/nvm#install-script) is recommended.

### Line endings

By default git would use `CRLF` line endings which would cause the scripts to fail. You can change it for this repo only by setting `autocrlf` to false by running `git config core.autocrlf false`. You can also enable it for all your repos by using the `--global` flag if you wish to do so.

## Cutting a Release

TODO

---

_Many thanks to [h5bp](https://github.com/h5bp/html5-boilerplate/blob/master/.github/CONTRIBUTING.md) for the inspiration with this contributing guide_
