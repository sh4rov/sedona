import {
  src,
  dest
} from 'gulp'

import plumber from 'gulp-plumber'
import newer from 'gulp-newer'

export const fonts = () =>
  src(paths.fonts.src)
  .pipe(newer(paths.fonts.dest))
  .pipe(plumber())
  .pipe(dest(paths.fonts.dest))