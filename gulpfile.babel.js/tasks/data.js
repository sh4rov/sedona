import { src, dest } from 'gulp';
import json from 'gulp-merge-json';
import yaml from 'gulp-yaml';

import paths from '../paths';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

const data = function() {
  return src('**/*.yml', { cwd: 'src/modules' })
    .pipe(plumber())
    .pipe(debug())
    .pipe(yaml({
      space: 2
    }))
    .pipe(json({
      fileName: 'data.json',
      jsonSpace: '  '
    }))
    .pipe(dest('tmp'))
}

module.exports = data;