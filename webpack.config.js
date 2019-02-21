const path = require('path')

module.exports = (env, argv) => {
  const mode = argv.mode || 'development'
  const isDevelopment = mode === 'development'

  return {
    mode: 'development',
    entry: './src/javascripts/index.js',
    devtool: isDevelopment ? 'source-map' : false,
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, "public/js")
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      //compress: true,
      port: 8003,
      inline: true,
      // 変更を監視する
      watchContentBase: true,
    },

    watchOptions: {
      poll: 2000,
      aggregateTimeout: 300,
      ignored: /node_modules/
    }
  }
}
