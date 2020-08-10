const path = require('path')

module.exports = (options, ctx) => {
  return {
    chainMarkdown (config) {
      config
        .plugin('graphviz')
        .use(require('./markdownItPlugin'))
    },
    enhanceAppFiles: path.resolve(__dirname, 'graphviz.js')
  }
}
