import gulp, { series } from 'gulp'
import path from 'path'
import smartGrid from 'smart-grid'
const gridOption = './gridOption.js';

function grid(done){
  delete require.cache[path.resolve(gridOption)];
  let options = require(gridOption);
  smartGrid(paths.smartGrid, options);
  done();
}

export { grid }