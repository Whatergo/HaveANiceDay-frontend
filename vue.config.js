 module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
      port: 8080, // 端口号
      host: 'localhost',
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      proxy: {
          '/api': {
              target: 'http://127.0.0.1:8000/api/', //接口域名（你请求的第三方接口）
              changeOrigin: true,             //是否跨域 （虚拟的站点需要更管origin）
              ws: true,                       //是否代理 websockets
              secure: true,                   //是否https接口
              pathRewrite: {                  //路径重置
                  '^/api': ''
              }
          }
      }
  }
 }