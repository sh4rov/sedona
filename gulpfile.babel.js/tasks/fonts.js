import { src, dest } from 'gulp';
import debug from 'gulp-debug';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';

const fonts = () => {
  return src(paths.fonts.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(newer(paths.fonts.dest))
    .pipe(dest(paths.fonts.dest));
};

module.exports = fonts;
