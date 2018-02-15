module.exports = {
    entry: "./src/ts/app.tsx",
    output: {
	filename: "js/app.js"
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
		test: /\.js$/,
		loader: "source-map-loader"
	    },
            {
		test: /\.scss$/,
		loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
	]
    }
};
