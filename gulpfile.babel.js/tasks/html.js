'use strict';

import { src, dest, lastRun } from 'gulp'
import pug from 'gulp-pug'
import htmlValidator from 'gulp-w3c-html-validator'
import plumber from 'gulp-plumber'
import newer from 'gulp-newer'
import changed from 'gulp-changed'
import browserSync from 'browser-sync'
const bs = browserSync.create();

export const html = () => 
  src(paths.views.src)
  .pipe(plumber())
  .pipe(changed(paths.dest))
  .pipe(pug({ pretty: true }))
  .pipe(htmlValidator())
  .pipe(plumber.stop())
  .pipe(dest(paths.dest))
  // .pipe(bs.reload())