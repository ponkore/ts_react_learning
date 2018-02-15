const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/ts/app.tsx",
    output: {
	filename: "js/app.js"
    },
    devtool: "source-map",
    resolve: {
	extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new UglifyJsPlugin({uglifyOptions: {ecma: 6}})
    ],
    module: {
	rules: [
	    {
		test: /\.tsx?$/,
		loader: 'ts-loader'
	    }
	]
    }
};
