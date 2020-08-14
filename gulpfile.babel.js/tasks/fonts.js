import {
  src,
  dest
} from 'gulp'

import plumber from 'gulp-plumber'
import newer from 'gulp-newer'

export const fonts = () =>
  src(paths.fonts.src)
  .pipe(plumber())
  .pipe(newer(paths.fonts.dest))
  .pipe(dest(paths.fonts.dest))