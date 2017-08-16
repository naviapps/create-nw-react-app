#!/usr/bin/env node

'use strict';

const path = require('path');
const program = require('commander');
const packageJson = require('../package.json');

program
  .version(packageJson.version)
  .description('Configuration and scripts for Create NW.js React App.');

program
  .command('start')
  .description('Runs the app in development mode.')
  .option('--babelrc', 'Whether or not to look up .babelrc files')
  .option('--webpack <path>', 'Path to the webpack config file')
  .option('--webpack-dev-server <path>', 'Path to the webpack Dev Server config file')
  .action(options => {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
    process.env.HOST = 'localhost';
    process.env.REACT_APP_BABELRC = options.babelrc === true;
    process.env.REACT_APP_WEBPACK = options.webpack
      ? path.resolve(options.webpack)
      : require.resolve('../config/webpack.config.dev');
    process.env.REACT_APP_WEBPACK_DEV_SERVER = options.webpackDevServer
      ? path.resolve(options.webpackDevServer)
      : require.resolve('../config/webpackDevServer.config');

    require('../scripts/start');
  });

program
  .command('build')
  .description('Builds the app for production to the build folder.')
  .option('--babelrc', 'Whether or not to look up .babelrc files')
  .option('--webpack <path>', 'Path to the webpack config file', require.resolve('../config/webpack.config.prod'))
  .action(options => {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
    process.env.REACT_APP_BABELRC = options.babelrc === true;
    process.env.REACT_APP_WEBPACK = options.webpack
      ? path.resolve(options.webpack)
      : require.resolve('../config/webpack.config.prod');

    require('../scripts/build');
  });

program
  .command('test')
  .description('Runs the test watcher in an interactive mode.')
  .allowUnknownOption(true)
  .action(() => {
    process.env.BABEL_ENV = 'test';
    process.env.NODE_ENV = 'test';
    process.env.PUBLIC_URL = '';

    require('../scripts/test');
  });

program.parse(process.argv);
