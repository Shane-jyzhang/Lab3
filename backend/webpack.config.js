const HtmlWebPackPlugin = require("html-webpack-plugin"); 
var path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({ 
  template: "./src/index.html", 
  filename: "./index.html" 
}); 
 
module.exports = { 
  module: { 
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:3000',
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve( __dirname, 'public'),
        filename: 'index.html',
    },
    rules: [ 
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: { 
          loader: "babel-loader" 
        } 
      } 
    ] 
  }, 
  plugins: [ 
    new HtmlWebPackPlugin({ 
    template: "./src/index.html", 
    filename: "./index.html" 
  })
] 
}; 