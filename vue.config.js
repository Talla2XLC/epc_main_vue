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
  }
};
