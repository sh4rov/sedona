'use strict';

import { series, parallel } from 'gulp';
import html from './tasks/ht\ml';
import styles from './tasks/styles';
import clean from './tasks/clean';
import serve from './tasks/serve';
import fonts from './tasks/fonts';
import images from './tasks/images';
import js from './tasks/scripts';
import svg from './tasks/svg';
import svgSprite from './tasks/svgSprite';
import cacheClear from './tasks/cacheClear';
import deploy from './tasks/deploy';

global.paths = require('./paths');

export const build = series(clean, svgSprite, parallel(html, styles, js, images, svg, fonts));
export const prod = series(clean, parallel(html, styles, js, images, fonts));

export default serve;

export { html, styles, images, fonts, js, serve, clean, cacheClear, svg, svgSprite, deploy };
