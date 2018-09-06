const webpack = require('webpack')
const { GuessPlugin } = require('guess-webpack')
const { GA } = process.env

console.log({GA})

module.exports = {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Experiment for integration of Guess.js with Nuxt.js' }
    ]
  },

  build: {
    parallel: true,
    extend(config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push(
      //     new GuessPlugin({
      //       GA,
      //       runtime: {
      //         delegate: true
      //       },
      //       routeProvider: false
      //     })
      //   )
      // }
    }
  }
}
