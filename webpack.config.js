require('babel-register');
const CONFIG_DIR = './.webpack';

const R = require('ramda');
const path = require('path');
const base = require(CONFIG_DIR).default;

module.exports = R.merge(
  base,
  R.compose(require, path.resolve)(CONFIG_DIR, process.env.NODE_ENV).default
);
