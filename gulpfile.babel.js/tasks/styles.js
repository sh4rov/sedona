'use strict';

import { src, dest, on } from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import changed from 'gulp-changed';
import groupMedia from 'gulp-group-css-media-queries';
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import debug from 'gulp-debug';
import webpcss from 'webpcss';
let plugins = [webpcss()];

const styles = () => {
  return src(paths.styles.src, {
    sourcemaps: true,
  })
    .pipe(plumber())
    .pipe(debug())
    .pipe(
      changed(paths.dest, {
        extention: '.css',
      })
    )
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(groupMedia())
    .pipe(dest(paths.styles.dest))
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(
      dest(paths.styles.dest, {
        sourcemaps: './maps',
      })
    );
};

module.exports = styles;
