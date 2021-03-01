module.exports = {
  devServer: {
    hot: true,
    liveReload: true
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/sass/_media.sass"`
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete("svg");

    config.module
      .rule("docx")
      .test(/\.docx$/)
      .use("file-loader")
      .loader("file-loader");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
          options: {
            svgo: {
              plugins: [{ removeViewBox: false }]
            }
          }
        }
      ]
    }
  }
};
