require('babel-register');
const CONFIG_DIR = './webpack';

const R = require('ramda');
const base = require(CONFIG_DIR);

module.exports = R.merge(
  base,
  R.compose(require, path.resolve)(CONFIG_DIR, process.env.NODE_ENV)
);