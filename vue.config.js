// vue.config.js
module.exports = {
  // 修改的配置
  // 将publicPath: '/api',改为publicPath: '/',
  publicPath: '/',
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8081/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}
