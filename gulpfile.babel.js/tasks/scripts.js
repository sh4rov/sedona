import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import babel from 'gulp-babel';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import paths from '../paths';

const js = () => {
  return src([paths.js.src, paths.js.modules], {
    sourcemaps: true,
  })
    .pipe(plumber())
    .pipe(debug())
    .pipe(babel())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(terser())
    .pipe(concat('main.min.js'))
    .pipe(dest(paths.js.dest), {
      sourcemaps: './maps',
    });
};

module.exports = js;
