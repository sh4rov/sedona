import browserSync from 'browser-sync'
const server = browserSync.create()
import { watch, series } from 'gulp'
import { html } from './html'
import { styles } from './styles'
import { images } from './images'
import { grid } from './smartGrid'
import paths from '../paths'
const gridOption = './gridOption.js';
// import path from 'path'
// import fs from 'fs'

function reload(done) {
  server.reload();
  done();
}

function stream(done) {
  server.stream();
  done();
}

function watchFiles() {
  watch(paths.styles.watch, styles)
  watch(gridOption, grid).on('change', stream)
  watch(paths.views.watch, html).on('change', reload)
  watch(paths.images.src, series(images, reload))
}

const watchDir = watch(paths.images.src);

watchDir.on('unlink', function(path, stats) {
  console.log(`File ${path} was removed`);
});



export {
  reload,
  stream,
  watchDir,
  watchFiles
}