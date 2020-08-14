// import browserSync from 'browser-sync'
import { watch, series, parallel } from 'gulp'
import { html } from './html'
import { styles } from './styles'
import { images } from './images'
import { js } from './scripts'
import { fonts } from './fonts'
import { grid } from './smartGrid'
import changed from 'gulp-changed'
const gridOption = './gridOption.js';
const bs = require('browser-sync').create();
import paths from '../paths'

function serve() {
  bs.init({
    server: {
      baseDir: './build'
    },
    notify: false,
    open: false
  });

  watch(gridOption, grid).on('change', bs.reload)
  watch(paths.styles.watch, {
    events: 'change'
  }, styles)
  watch(paths.images.src, images)
  watch(paths.views.watch, html)
  watch(paths.fonts.src, fonts)
  watch(paths.js.watch, js)

  const watchDir = watch(
    paths.dest + '/*.');

  watchDir.on('unlink', function (path, stats) {
    console.log(`File ${path} was removed`);
  });
}

export { 
  serve
}