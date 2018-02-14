const gulp = require('gulp');
// const browserSync = require('browser-sync').create();
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
// const config = require('./tsconfig.json');

gulp.task('webpack', () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("dist"));
});

// gulp.task('default', [
//     'clean:dist',
//     'copy-modules',
//     'zip',
//     'deploy'
// ]);
