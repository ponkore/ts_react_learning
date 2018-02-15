const gulp = require('gulp');
const mkdirp = require('mkdirp');
const del = require('del');
const exec = require('child_process').exec;
const browserSync = require('browser-sync').create();

gulp.task('clean:dist', () => {
    mkdirp('dist', (err) => {
        if (err) console.error(err);
    });
    return del.sync(['dist/*']);
});

gulp.task('build:dev', (callback) => {
    // see https://www.npmjs.com/package/gulp-exec, not using pipe
    exec('./node_modules/.bin/webpack --config ./webpack.config.dev.js', (err, stdout, stderr) => {
	console.log(stdout);
	console.log(stderr);
	callback(err);
    });
});

gulp.task('build:prod', (callback) => {
    exec('./node_modules/.bin/webpack --config ./webpack.config.prod.js', (err, stdout, stderr) => {
	console.log(stdout);
	console.log(stderr);
	callback(err);
    });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist",
            index: "index.html"
        }
    });
});

gulp.task('default', [
    'clean:dist',
    'build:dev',
    'browser-sync'
]);
