const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "src/ts/app.js",
    output: {
	filename: "resources/js/app.js"
    },
    devtool: "source-map",
    plugins: [
        new UglifyJsPlugin({uglifyOptions: {ecma: 6}})
    ]
};
