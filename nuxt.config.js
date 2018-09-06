const { GuessPlugin } = require('guess-webpack')
const { GA } = process.env

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
          // Google Analitycs view ID.
          GA,
          // Hints Guess to not perform pre-fetching and delegate this logic to its consumer.
          runtime: {
            delegate: true
          },
          // Guess does not have to collect the routes and the corresponding bundle entry points.
          routeProvider: false
        })
      )
      return config
    }
  }
}
