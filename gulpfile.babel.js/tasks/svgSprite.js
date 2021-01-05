import { src, dest } from 'gulp';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';
import debug from 'gulp-debug';
import inject from 'gulp-inject'
import pretty from 'gulp-pretty-html'

let svgSprite = () => {
  const svgs = src('./src/img/sprite/*.svg')
    .pipe(cheerio({
      run: function ($) {
          $('[fill]').removeAttr('fill');
      },
    parserOptions: { xmlMode: true }
}))
    .pipe(svgstore({ inlineSvg: true }));

  function fileContents (filePath, file) {
    return file.contents.toString();
  }

  return src('./src/pug/config/svg.pug')
    .pipe(inject(svgs, { transform: fileContents }))
    .pipe(pretty({
      indent_size: 2,
    }))
    .pipe(debug({
      title: 'svg sprite added:'
    }))
    .pipe(dest('./src/pug/config'))
}

module.exports = svgSprite;