import { watch } from 'gulp';
import { html } from '../index';
import data from './data';
import styles from './styles';
import images from './images';
import js from './scripts';
import fonts from './fonts';
import svg from './svg';
import paths from '../paths';
import path from 'path';
import del from 'del';
import browserSync from 'browser-sync';
const bs = browserSync.create();

const serve = () => {
  bs.init({
    server: {
      baseDir: './build',
      routes: {
        './node_modules/': 'node_modules'
      }
    },
    notify: false,
    open: false,
  });

  watch(paths.styles.watch, styles).on('change', bs.reload);

  watch(paths.views.watch, html).on('change', bs.reload);

  watch(paths.data.watch, data).on('change', bs.reload);

  watch(paths.js.watch, js).on('change', bs.reload);

  watch(paths.fonts.src, fonts).on('change', bs.reload);

  watch(paths.svg.src, svg).on('change', bs.reload);

  watch(paths.images.src, images).on('unlink', function (filepath) {
    let filePathFromSrc = path.relative(path.resolve('src'), filepath);
    let destFilePath = path.resolve('build', filePathFromSrc);
    del.sync(destFilePath);
  });
};

module.exports = serve;
