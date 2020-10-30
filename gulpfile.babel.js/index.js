'use strict';

import { series, parallel } from 'gulp';
import pages from './tasks/html';
import styles from './tasks/styles';
import clean from './tasks/clean';
import serve from './tasks/serve';
import fonts from './tasks/fonts';
import images from './tasks/images';
import js from './tasks/scripts';
import svg from './tasks/svg';
import data from './tasks/data';
import cacheClear from './tasks/cacheClear';
import deploy from './tasks/deploy';

global.paths = require('./paths');

export const html = series(data, pages);
export const build = series(clean, svg, parallel(data, html, styles, js, images, fonts));
export const prod = series(clean, parallel(html, styles, js, images, fonts));

export default serve;

export { pages, styles, images, fonts, js, serve, clean, data, cacheClear, svg, deploy };
