const gulp = require('gulp');
const mkdirp = require('mkdirp');
const del = require('del');
const zip = require('gulp-zip');
const exec = require('child_process').exec;
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.js');

gulp.task('clean:dist', () => {
    mkdirp('dist', (err) => {
        if (err) console.error(err);
    });
    return del.sync(['dist/*']);
});

gulp.task('copy-modules', () => {
    return gulp.src(['node_modules/**/*', '!node_modules/gulp*', 'index.js'], { base: '.' })
             .pipe(gulp.dest('dist/'));
});

gulp.task('webpack', () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("dist"));
});

gulp.task('zip', ['copy-modules'], () => {
    return gulp.src(['./dist/node_modules/**/*', './dist/index.js'], { base: './dist' })
             .pipe(zip('sensor_data_writer.zip'))
             .pipe(gulp.dest('.'));
});

gulp.task('deploy', ['zip'], (callback) => {
    exec('aws lambda update-function-code --function-name sensor_data_add --zip-file fileb://sensor_data_writer.zip', (err, stdout, stderr) => {
	console.log(stdout);
	console.log(stderr);
	callback(err);
    });
});

gulp.task('default', [
    'clean:dist',
    'copy-modules',
    'zip',
    'deploy'
]);
