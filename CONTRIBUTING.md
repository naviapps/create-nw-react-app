# Contributing to Create NW.js React App

## Folder Structure of Create React App

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

#### [create-nw-react-app](https://github.com/facebook/create-react-app/tree/master/packages/create-nw-react-app)

The global CLI command code can be found in this directory, and shouldn't often be changed. It should run on Node 8.10+.

#### [eslint-config-nw-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-nw-react-app)

This package contains a conservative set of rules focused on making errors apparent and enforces no style rules.<br>
This package is enabled by default for all `create-nw-react-app` scaffolded applications.

#### [nw-react-scripts](https://github.com/facebook/create-react-app/tree/master/packages/nw-react-scripts)

This package is the heart of the project, which contains the scripts for setting up the development server, building production builds, configuring all software used, etc.<br>
All functionality must be retained (and configuration given to the user) if they choose to eject.

## Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/naviapps/create-nw-react-app`

2. Run `yarn` in the root `create-nw-react-app` folder.

Once it is done, you can modify any file locally and run `yarn start`, `yarn test` or `yarn build` just like in a generated project.

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

---

_Many thanks to [h5bp](https://github.com/h5bp/html5-boilerplate/blob/master/.github/CONTRIBUTING.md) for the inspiration with this contributing guide_
