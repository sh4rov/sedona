import { watch } from 'gulp'
import { html } from './html'
import { styles } from './styles'
import { images } from './images'
import { js } from './scripts'
import { fonts } from './fonts'
import { grid } from './smartGrid'
const gridOption = './gridOption.js';
const bs = require('browser-sync').create();
import paths from '../paths'
import path from 'path'
import del from 'del'

function serve() {
  bs.init({
    server: {
      baseDir: './build'
    },
    notify: false,
    open: false
  });

  watch(gridOption, grid).on('change', bs.reload);

  watch(paths.styles.watch, {
    events: ['add', 'change']
  }, styles);

  watch(paths.images.src, images).on('unlink', function (filepath) {
    let filePathFromSrc = path.relative(path.resolve('src'), filepath);
    let destFilePath = path.resolve('build', filePathFromSrc);
    del.sync(destFilePath);
  });

  watch(paths.views.watch, {
    events: ['add', 'change']
  }, html);

  watch(paths.fonts.src, {
    events: 'add'
  }, fonts);

  watch(paths.js.watch, js);

}

export { 
  serve
}