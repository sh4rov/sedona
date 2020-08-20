import del from 'del';
const clean = () => del(paths.dest);
module.exports = clean;
