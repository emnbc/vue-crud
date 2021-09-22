module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
        '^/api': {
            target: 'http://nest-angular.emnbc.com',
            changeOrigin: true,
            logLevel: 'debug'
        },
        '^/uploads': {
          target: 'http://nest-angular.emnbc.com',
          changeOrigin: true,
          logLevel: 'debug'
      }
    }
  }
}
