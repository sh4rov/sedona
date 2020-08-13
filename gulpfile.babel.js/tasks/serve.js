import browserSync from 'browser-sync'
import { watch, series, parallel } from 'gulp'
import { html } from './html'
import { styles } from './styles'
import { images } from './images'
import { js } from './scripts'
import { grid } from './smartGrid'
import changed from 'gulp-changed'
const gridOption = './gridOption.js';
const reload = browserSync.reload;

function serve() {
  browserSync.init({
    server: {
      baseDir: './build'
    },
    notify: false,
    open: false
  });

  watch(paths.styles.watch, styles)
  watch(gridOption, grid).on('change', reload)
  watch(paths.images.src, images)
  watch(paths.views.watch, html)
  watch(paths.js.watch, { events: 'change' }, js)

  const watchDir = watch(
    paths.dest + '*.');

  watchDir.on('unlink', function (path, stats) {
    console.log(`File ${path} was removed`);
  });
}

export { 
  serve
}