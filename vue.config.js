const { defineConfig } = require('@vue/cli-service')
const event = process.env.npm_lifecycle_event
const path = require('path')
const [,moduleName] = event.split(':')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env']['moduleName'] = JSON.stringify(moduleName)
      return args
    })
  },
  outputDir: path.resolve(__dirname,`dist/${moduleName}`),
  assetsDir: 'static'
})
