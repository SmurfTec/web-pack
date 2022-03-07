const path = require('path');

module.exports = {
  mode: 'development',

  devServer: {
    static: path.join(__dirname, 'dist'),
  },
};
