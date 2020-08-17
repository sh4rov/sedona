"use strict";

import {
  src,
  dest,
  lastRun
} from "gulp";
import sass from "gulp-sass";
import browserSync from "browser-sync";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import changed from "gulp-changed";
import groupMedia from "gulp-group-css-media-queries";
import postcss from "gulp-postcss";
import debug from "gulp-debug";
import webpcss from "webpcss";
const bs = browserSync.create();
let plugins = [webpcss()];

module.exports = () =>
  src(paths.styles.src, {
    sourcemaps: true,
  })
  .pipe(plumber())
  .pipe(debug())
  .pipe(changed(paths.dest, {
    extention: '.css'
  }))
  .pipe(sass())
  .pipe(postcss(plugins))
  .pipe(groupMedia())
  .pipe(dest(paths.styles.dest))
  .pipe(
    rename({
      suffix: ".min",
    })
  )
  .pipe(
    dest(paths.styles.dest, {
      sourcemaps: "./maps",
    })
  )
  .pipe(
    bs.reload({
      stream: true,
    })
  )