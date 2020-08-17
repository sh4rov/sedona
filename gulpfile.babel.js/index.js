'use strict';

import { series, parallel } from 'gulp'
import html from './tasks/html'
import styles from './tasks/styles'
import clean from  './tasks/clean'
import serve from './tasks/serve'
import images from './tasks/images'
import js from './tasks/scripts'
import { grid } from './tasks/smartGrid'
import cache from 'gulp-cache'

export const clearCache = () =>
  cache.clearAll();

global.paths = require('./paths');
export const build = series(
  clean,
  grid,
  parallel(
    html, 
    styles, 
    images)
);
export const dev = series(build, serve);

export default dev

export {
  html,
  styles,
  images,
  js,
  serve,
  clean
}