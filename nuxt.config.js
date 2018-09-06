const { GuessPlugin } = require('guess-webpack')

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

  plugins: [
    { src: '~/plugins/guess', ssr: false }
  ],

  build: {
    extend(config, ctx) {
      if (ctx.isServer) return config
      config.plugins.push(
        new GuessPlugin({
          GA: 'XXXXXXXX', // 'XXXXXXXX'
          runtime: {
            delegate: true
          },
          routeProvider: false
        })
      )
      return config
    }
  }
}
