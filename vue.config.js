  
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://vip.udn.com/newmedia/2020/companytest'
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