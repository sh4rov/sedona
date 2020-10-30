import { src, dest } from 'gulp';

import cache from 'gulp-cache';
import image from 'gulp-image';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import newer from 'gulp-newer';
import webp from 'gulp-webp';

const imageConfig = {
  pngquant: true,
  optipng: false,
  zopflipng: true,
  jpegRecompress: false,
  mozjpeg: true,
  gifsicle: true,
  svgo: true,
  concurrent: 10,
  quiet: true
}

const images = () => {
  return src(paths.images.src)
    .pipe(plumber())
    .pipe(newer(paths.images.dest))
    .pipe(debug())
    .pipe(
      webp({
        quality: 65,
      })
    )
    .pipe(dest(paths.images.dest))
    .pipe(src(paths.images.src))
    .pipe(
      cache(
        image(imageConfig),
        {
          name: 'images',
        }
      )
    )
    .pipe(debug())
    .pipe(dest(paths.images.dest));
};

module.exports = images;
