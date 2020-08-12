'use strict';

import { src, dest, lastRun } from 'gulp'
import pug from 'gulp-pug'
import htmlValidator from 'gulp-w3c-html-validator'
import plumber from 'gulp-plumber'
import newer from 'gulp-newer'
import changed from 'gulp-changed'
import debug from 'gulp-debug'
import browserSync from 'browser-sync'
let reload = browserSync.reload;

export const html = () =>
  src(paths.views.src)
  .pipe(plumber())
  .pipe(debug())
  .pipe(changed(paths.dest), { extention: '.html' })
  .pipe(pug({ pretty: true }))
  .pipe(htmlValidator())
  .pipe(dest(paths.views.dest))
  .on('end', reload)