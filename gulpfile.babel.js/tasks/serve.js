import browserSync from 'browser-sync'
const server = browserSync.create()

function serve() {
  browserSync.init({
    server: {
      baseDir: './build'
    },
    notify: false,
    open: false
  });
}

export { serve }