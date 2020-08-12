'use strict';

import { src, dest, lastRun, series } from 'gulp'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import changed from 'gulp-changed'
import groupMedia from 'gulp-group-css-media-queries'
import debug from 'gulp-debug'

export const styles = () =>
  src(paths.styles.src)
  .pipe(plumber())
  .pipe(debug())
  .pipe(changed(paths.dest, { extention: '.css' }))
  .pipe(sass())
  .pipe(groupMedia())
  .pipe(dest(paths.styles.dest))
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(dest(paths.styles.dest))
  .pipe(browserSync.stream())