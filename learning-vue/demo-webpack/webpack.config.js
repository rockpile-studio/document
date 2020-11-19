const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取文件的路径，通过nodejs的全局变量__dirname（对应当前文件所在的目录路径）
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // 默认情况下，webpack会将生成的路径直接返回
    // 但是整个程序是打包在dist目录下，所以publicPath添加"dist/"
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader负责将css文件进行加载
        // style-loader负责将样式添加到dom中，style-loader必须放在css-loader左侧
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit(8192B)时，会将图片转换编译成base64字符串形式，
              // 大于limit的使用file-loader加载
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
