import ghPages from 'gh-pages';
import path from 'path';

const deploy = function(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}

module.exports = deploy;