import path from 'path';
import smartGrid from 'smart-grid';
const gridOption = './gridOption.js';
import gulp from 'gulp';

const grid = function (done) {
  delete require.cache[path.resolve(gridOption)];
  let options = require(gridOption);
  smartGrid(paths.smartGrid, options);
  done();
};

module.exports = grid;
