'use strict';

import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import pretty from 'gulp-pretty-html';

const html = () => {
  return src(paths.views.src)
    .pipe(plumber())  
    .pipe(debug())
    .pipe(pug({
      pretty: true
    }))
    .pipe(pretty({
      indent_size: 2,
    }))
    .pipe(dest(paths.views.dest));
};

module.exports = html;
