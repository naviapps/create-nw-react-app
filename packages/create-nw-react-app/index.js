#!/usr/bin/env node

'use strict';

const chalk = require('chalk');

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

if (major < 6) {
  console.error(
    chalk.red(
      'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'Create NW.js React App requires Node 6 or higher. \n' +
      'Please update your version of Node.'
    )
  );
  process.exit(1);
}

require('./createNwReactApp');
