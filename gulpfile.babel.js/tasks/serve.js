import browserSync from "browser-sync";
const bs = browserSync.create();
const gridOption = "./gridOption.js";

module.exports = () =>
  bs.init({
    server: {
      baseDir: "./build",
    },
    notify: false,
    open: false,
  })