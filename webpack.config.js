const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
	filename: "index.js"
    },
    devtool: "source-map",
    plugins: [
        new UglifyJsPlugin({uglifyOptions: {ecma: 6}})
    ]
};

