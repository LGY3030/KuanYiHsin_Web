  
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'http://nmdap.udn.com.tw/test/companytest/'
      : './',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/style/_mixins.scss"`
        },
        scss: {
          prependData: `@import "@/assets/style/_mixins.scss";`
        },
      }
    }
  }