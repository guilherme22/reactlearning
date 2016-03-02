module.exports = {
	entry: [
	  './app/index.js'	
	],
	module:{
	  loaders:[
	  {test: /\.coffee$/, include: __dirname + '/app', loader: "coffee-loader"}	
	  ]
	}
}
