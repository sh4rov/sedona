'use strict';

import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import pretty from 'gulp-pretty-html';

import data from './data';
import getJsonData from '../util/getJsonData';



const pages = () => {

  const pugConfig = {
    locals: {...getJsonData("./tmp/data.json")}
  };

  return src(paths.views.src)
    .pipe(plumber())  
    .pipe(debug())
    .pipe(pug(pugConfig))
    .pipe(pretty({
      indent_size: 2,
    }))
    .pipe(dest(paths.views.dest));
};

module.exports = pages;
