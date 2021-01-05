import { src, dest } from 'gulp';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

import paths from '../paths'

const svg = function () {
  return src(paths.svg.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[fill-opacity]').removeAttr('fill-opacity');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(debug())
    .pipe(dest(paths.svg.dest))
    .pipe(debug())
};

module.exports = svg;
