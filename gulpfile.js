const gulp = require('gulp');
const mkdirp = require('mkdirp');
const del = require('del');
const exec = require('child_process').exec;

gulp.task('clean:dist', () => {
    mkdirp('dist', (err) => {
        if (err) console.error(err);
    });
    return del.sync(['dist/*']);
});

gulp.task('copy:html', () => {
    return gulp.src(['src/index.html'])
	.pipe(gulp.dest('dist/'));
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

gulp.task('serve', ['clean:dist', 'copy:html', 'build:dev'], function() {
    exec('./node_modules/.bin/webpack-dev-server --config ./webpack.config.dev.js', (err, stdout, stderr) => {
	console.log(stdout);
	console.log(stderr);
	callback(err);
    });
});

gulp.task('default', [
    'clean:dist',
    'copy:html',
    'build:dev',
    'serve'
]);
