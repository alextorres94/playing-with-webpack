const path = require('path')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/index.js'),
    contact: path.resolve(__dirname, 'src/contact.js'),
    location: path.resolve(__dirname, 'src/location.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
