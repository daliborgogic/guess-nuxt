import { guess } from 'guess-webpack/api';

const { GuessPlugin } = require('guess-webpack')
const { GA } = process.env

export default {
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
      if (ctx.isClient) {
        const guessOptions = {
          // Hints Guess to not perform pre-fetching and delegate this logic to its consumer.
          runtime: {
            delegate: true,
            prefetchConfig: {
              '4g': 0.3,
              '3g': 0.3,
              '2g': 0.3,
              'slow-2g': 0.3
            }
          },
          // Guess does not have to collect the routes and the corresponding bundle entry points.
          routeProvider: false
        }
        if (GA) guessOptions.GA = GA
        else guessOptions.reportProvider = () => Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));

        config.plugins.push(
          new GuessPlugin(guessOptions)
        )
      }
    }
  }
}
