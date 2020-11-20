module.exports = {
  devServer: {
    // 通过webpack-dev-server运行
    // contentBase是指定devServer是为哪个文件夹提供本地服务，默认是根目录
    contentBase: './dist',
    port: 8080,
    // 页面是否实时刷新
    inline: true,
  },
}
