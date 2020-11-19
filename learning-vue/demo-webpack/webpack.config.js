const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取文件的路径，通过nodejs的全局变量__dirname（对应当前文件所在的目录路径）
    path: path.resolve( __dirname, './dist' ),
    filename: 'bundle.js',
  },
}
