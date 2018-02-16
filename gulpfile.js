const gulp = require('gulp');
const mkdirp = require('mkdirp');
const del = require('del');
const exec = require('child_process').exec;
const webpack = (config) => { return "./node_modules/.bin/webpack --config " + config; }
const dev_server = (config) => { return "./node_modules/.bin/webpack-dev-server --config " + config + " --watch --hot"; }

gulp.task('clean:dist', () => {
    mkdirp('dist', (err) => {
        if (err) console.error(err);
    });
    return del.sync(['dist/*']);
});

gulp.task('build:dev', (callback) => {
    // see https://www.npmjs.com/package/gulp-exec, not using pipe
    exec(webpack('./webpack.config.dev.js'), (err, stdout, stderr) => {
	console.log(stdout);
	console.log(stderr);
	callback(err);
    });
});

gulp.task('build:prod', (callback) => {
    exec(webpack('./webpack.config.prod.js'), (err, stdout, stderr) => {
	console.log(stdout);
	console.log(stderr);
	callback(err);
    });
});

gulp.task('serve', ['clean:dist', 'build:dev'], function() {
    exec(dev_server('./webpack.config.dev.js'), (err, stdout, stderr) => {
	console.log(stdout);
	console.log(stderr);
	callback(err);
    });
});

gulp.task('default', [
    'clean:dist',
    'build:dev',
    'serve'
]);
