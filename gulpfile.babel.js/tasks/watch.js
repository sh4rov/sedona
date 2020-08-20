import { watch, series } from "gulp"
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
const server = browserSync.create();
const gridOption = "./gridOption.js";

function reload(done) {
  server.reload();
  done();
}

const watchFiles = () => {
  watch(gridOption, grid);

  watch(paths.styles.watch, series(styles, reload));

  watch(paths.images.src, images).on("unlink", function (filepath) {
    let filePathFromSrc = path.relative(path.resolve("src"), filepath);
    let destFilePath = path.resolve("build", filePathFromSrc);
    del.sync(destFilePath);
  });

  watch(paths.views.watch, html);
  watch('.src/**/*.html', reload)

  watch(paths.fonts.src, fonts);

  watch(paths.js.watch, js);
};

module.exports = watchFiles;