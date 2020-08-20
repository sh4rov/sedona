import browserSync from 'browser-sync';
const server = browserSync.create();

const serve = () => {
  server.init({
    server: {
      baseDir: './build',
    },
    notify: false,
    open: false,
  });
};

module.exports = serve;