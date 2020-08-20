import { src, dest, lastRun } from 'gulp';

import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import remember from 'gulp-remember';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import newer from 'gulp-newer';
import webp from 'gulp-webp';

const images = () => {
  return src(paths.images.src)
    .pipe(plumber())
    .pipe(newer(paths.images.dest))
    .pipe(debug())
    .pipe(
      webp({
        quality: 80,
      })
    )
    .pipe(dest(paths.images.dest))
    .pipe(src(paths.images.src))
    .pipe(
      cache(
        imagemin({
          interlaced: true,
          progressive: true,
          optimizationLevel: 5,
          svgoPlugins: [
            {
              removeViewBox: true,
            },
          ],
        }),
        {
          name: 'imagemin',
        }
      )
    )
    .pipe(debug())
    .pipe(dest(paths.images.dest));
};

module.exports = images;
