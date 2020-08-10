const path = require('path')

const cssExtension = /\.css$/

module.exports = {
  entry: path.resolve(__dirname,'src/index.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: cssExtension,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
