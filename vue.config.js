module.exports = {
  devServer: {
    hot: true,
    liveReload: true
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/sass/_fonts.sass"`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("docx")
      .test(/\.docx$/)
      .use("file-loader")
      .loader("file-loader");
  }
};
