'use strict';

import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import data from 'gulp-data'
import fs from 'fs'
import pretty from 'gulp-pretty-html';

import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

import paths from '../paths'

const html = () => {
  return src(paths.views.src)
    .pipe(plumber())  
    .pipe(debug())
    .pipe(data(function() {
      return JSON.parse(fs.readFileSync(paths.data.src))
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(pretty({
      indent_size: 2,
      indent_char: ' ',
    }))
    .pipe(dest(paths.views.dest));
};

module.exports = html;
