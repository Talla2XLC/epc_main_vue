module.exports = {
  devServer: {
    hot: true,
    liveReload: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/_fonts.sass"`
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('docx')
      .test(/\.docx$/)
      .use('file-loader').loader('file-loader')
  }
};
