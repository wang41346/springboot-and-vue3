// const { defineConfig } = require('@vue/cli-service')
const path = require("path")
// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack: {
//      resolve: {
//        symlinks: false,
//        alias: {
//          vue: path.resolve("./node_modules/vue"),
//        }
//       }
//     }
// })
module.exports = {
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        // 要代理的服务器地址  这里不用写 api
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true // 是否跨域
      }
    }
  }
}

