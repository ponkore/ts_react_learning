const gulp = require('gulp');
const mkdirp = require('mkdirp');
const del = require('del');
// const browserSync = require('browser-sync').create();
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackDevConfig = require('./webpack.config.dev.js');
const webpackProdConfig = require('./webpack.config.prod.js');

gulp.task('clean:dist', () => {
    mkdirp('dist', (err) => {
        if (err) console.error(err);
    });
    return del.sync(['dist/*']);
});

gulp.task('build:dev', () => {
    return webpackStream(webpackDevConfig, webpack)
        .pipe(gulp.dest("dist"));
});

gulp.task('build:prod', () => {
    return webpackStream(webpackProdConfig, webpack)
        .pipe(gulp.dest("dist"));
});

gulp.task('default', [
    // 'clean:dist',
    'build:dev'
]);
