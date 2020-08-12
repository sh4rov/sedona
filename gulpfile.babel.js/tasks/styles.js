'use strict';

import { src, dest, lastRun } from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import groupMedia from 'gulp-group-css-media-queries'
import debug from 'gulp-debug'

export const styles = () =>
  src(paths.styles.src, { since: lastRun(styles) })
  .pipe(plumber())
  .pipe(debug())
  .pipe(sass())
  .pipe(groupMedia())
  .pipe(dest(paths.styles.dest))
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(browserSync.stream())
  .pipe(dest(paths.styles.dest))