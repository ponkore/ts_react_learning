const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/ts/app.tsx",
    output: {
	filename: "js/app.js",
	path: __dirname + "/dist"
    },
    resolve: {
	extensions: ['.ts', '.tsx', '.js']
    },
    externals: {
	"react": "React",
	"react-dom": "ReactDOM"
    },
    plugins: [
        new UglifyJsPlugin({uglifyOptions: {ecma: 6}})
    ],
    module: {
	rules: [
	    {
		test: /\.tsx?$/,
		loader: 'ts-loader'
	    },
            {
		test: /\.scss$/,
		loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
	]
    }
};
