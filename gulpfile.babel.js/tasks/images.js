import {
  src,
  dest,
  lastRun
} from 'gulp'
import cached from 'gulp-cached'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
// import paths from '../paths'

export const images = () =>
  src(paths.images.src, { since: lastRun(images)})
  .pipe(newer(paths.images.dest))
  .pipe(imagemin())
  .pipe(dest(paths.images.dest))