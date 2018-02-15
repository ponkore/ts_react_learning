const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin("app.css");

module.exports = [{
    entry: "./src/ts/app.tsx",
    output: {
	path: path.resolve(__dirname, "./dist/js/"),
	filename: "app.js"
    },
    devtool: "source-map",
    resolve: {
	extensions: ['.ts', '.tsx', '.js']
    },
    externals: {
	"react": "React",
	"react-dom": "ReactDOM"
    },
    module: {
	rules: [
	    {
		test: /\.tsx?$/,
		loader: "awesome-typescript-loader"
	    },
	    {
		enforce: "pre",
		test: /\.js$/,
		loader: "source-map-loader"
	    }
	]
    }
},{
    entry: {
	main: "./src/scss/app.scss"
    },
    output: {
	path: path.resolve(__dirname, "./dist/css/"),
	filename: "app.css"
    },
    devtool: "source-map",
    module: {
	rules: [
            {
		test: /\.scss$/,
		exclude: /node_modules/,
		// loaders: ['style-loader', 'css-loader', 'sass-loader']
		use: extractSass.extract({
		    fallback: "style-loader",
		    use: ["css-loader", "sass-loader"]
		})
            }
	]
    },
    plugins: [
	extractSass
    ],
    resolve: {
	// style-loader の中で、.jsファイルを拡張子なしで requireしているところがあるため、'.js'が必要
	extensions: ['.css', '.js']
    }
}];
