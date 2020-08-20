'use strict';

import { src, dest, lastRun } from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import debug from 'gulp-debug';
import webpHTML from 'gulp-webp-html';

const html = () => {
  return src(paths.views.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(changed(paths.dest), {
      extention: '.html',
    })
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(webpHTML())
    .pipe(dest(paths.views.dest));
};

module.exports = html;
