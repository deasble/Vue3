const { defineConfig } = require("@vue/cli-service");
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
  }
}

module.exports = {
  devServer: {
    proxy: {
     '/api': {
      target: "http://localhost:3000",
      changeOrigin: true,
     } 
    }
  }
}
