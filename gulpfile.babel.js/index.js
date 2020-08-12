'use strict';

import { series, parallel } from 'gulp'
import { html } from './tasks/html'
import { styles } from './tasks/styles'
import { clean } from  './tasks/clean'
import { serve } from './tasks/serve'
import { images } from './tasks/images'
import { grid } from './tasks/smartGrid'

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
  styles,
  html,
  serve,
  images,
  clean
}