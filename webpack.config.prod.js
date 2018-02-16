const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin("app.css");

module.exports = [{
    entry: "./src/index.html",
    output: {
	path: path.resolve(__dirname, "./dist/"),
	filename: "index.html"
    },
    module: {
	rules: [
	    {
		test: /\.html/,
		loader: require.resolve('html-loader')
	    }
	]
    },
    plugins: [
	new HtmlWebpackPlugin({
	    inject: true,
	    template: 'public/index.html'
	}),
	new InterpolateHtmlPlugin({
	    'bootstrap_css_cdn': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css'
	})
    ]
},{
    entry: "./src/ts/app.tsx",
    output: {
	path: path.resolve(__dirname, "./dist/js/"),
	filename: "app.js"
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
		loader: "awesome-typescript-loader"
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
    module: {
	rules: [
            {
		test: /\.scss$/,
		exclude: /node_modules/,
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
