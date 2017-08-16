'use strict';

const path = require('path');
const jest = require('jest');
const createJestConfig = require('./utils/createJestConfig');
const paths = require('../config/paths');

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const argv = process.argv.slice(3);

if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

argv.push(
  '--config',
  JSON.stringify(
    createJestConfig(
      relativePath => path.resolve(__dirname, '..', relativePath),
      path.resolve(paths.appSrc, '..'),
      false
    )
  )
);

jest.run(argv);
