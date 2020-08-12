'use strict';

import { series, parallel } from 'gulp'
import { html } from './tasks/html'
import { styles } from './tasks/styles'
import { clean } from  './tasks/clean'
import { serve } from './tasks/serve'
import { images } from './tasks/images'
import { grid } from './tasks/smartGrid'
import { watchFiles } from './tasks/watch'

global.paths = require('./paths')
export { images }
export { watchFiles }
export const build = series(
  clean,
  parallel(
    html, 
    styles, 
    images)
);
export const dev = series(build, watchFiles, serve);

export default dev