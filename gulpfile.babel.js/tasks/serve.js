import browserSync from 'browser-sync'
import { watch, series, parallel } from 'gulp'
import { html } from './html'
import { styles } from './styles'
import { images } from './images'
import { grid } from './smartGrid'
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

  const watchDir = watch(paths.images.src);

  watchDir.on('unlink', function (path, stats) {
    console.log(`File ${path} was removed`);
  });
}

export { serve }