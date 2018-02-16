const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
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
	    template: 'src/index.html'
	}),
	new InterpolateHtmlPlugin({
	    'react_js_cdn': 'https://unpkg.com/react@16/umd/react.development.js',
	    'react_dom_js_cdn': 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
	    'bootstrap_css_cdn': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
	    'bs_integrity': 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
	})
    ]
},{
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
    },
    devServer: {
	contentBase: path.resolve(__dirname, 'dist'),
	port: 3000
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
