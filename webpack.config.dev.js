module.exports = {
    entry: "./src/ts/app.tsx",
    output: {
	filename: "js/app.js"
    },
    devtool: "source-map",
    resolve: {
	extensions: ['.ts', '.tsx', '.js']
    },
    module: {
	rules: [
	    {
		test: /\.tsx?$/,
		loader: 'ts-loader'
	    }
	]
    }
};
