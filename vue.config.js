module.exports = {
  configureWebpack: {
    devServer: {
      port: '8201',
      proxy: {
        '/api': {
          target: 'http://192.168.27.65:3040/'
          // pathRewrite: {
          //   '^/apiService': '/'
          // }
        }
      }
    }
  }
}
