import { watch } from "gulp"
import html from "./html"
import styles from "./styles"
import images from "./images"
import js from "./scripts"
import fonts from "./fonts"
import paths from "../paths"
import path from "path"
import del from "del"
import browserSync from "browser-sync"
import { grid } from "./smartGrid"
const bs = browserSync.create();
const gridOption = "./gridOption.js";

function reload(done) {
  bs.reload();
  done();
}

module.exports = () =>

  watch(gridOption, grid).on("change", reload);

  watch(paths.styles.watch, styles);
  // watch(paths.styles.dest, {
  //   events: 'change'
  // }, reload);

  watch(paths.images.src, images).on("unlink", function (filepath) {
    let filePathFromSrc = path.relative(path.resolve("src"), filepath);
    let destFilePath = path.resolve("build", filePathFromSrc);
    del.sync(destFilePath);
  });

  watch(paths.views.watch, html);

  watch(paths.fonts.src, fonts);

  watch(paths.js.watch, js);