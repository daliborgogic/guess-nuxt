# Guess.js + Nuxt.js

**[Guess.js](https://github.com/guess-js/guess) is a collection of libraries & tools for enabling data-driven user-experience on the web.**

**[Nuxt.js](https://github.com/nuxt/nuxt.js) is a Vue.js Meta Framework to create complex, fast & universal web applications quickly.**

<p align="center">
  <a href="https://guess-nuxt.now.sh/">
    <img src="https://raw.githubusercontent.com/daliborgogic/guess-nuxt/master/assets/demo.gif"><br>
    DEMO
  </a>
</p>p>

In this particular example, we combine Guess.js with Nuxt.js to introduce predictive prefetching of JavaScript bundles. Based on user navigation patterns collected from Google Analytics or other source, Guess.js builds a machine-learning model to predict and prefetch JavaScript that will be required in each subsequent page.

Based on early benchmarks, this can improve the perceived page load performance with 20%.

For more information on Guess.js, take a look at the following links:
* [Google I/O announcement](https://www.youtube.com/watch?time_continue=2093&v=Mv-l3-tJgGk) by Addy Osmani
* [Introducing Guess.js - a toolkit for enabling data-driven user-experiences on the Web](https://blog.mgechev.com/2018/05/09/introducing-guess-js-data-driven-user-experiences-web/)
* [Using Guess.js with static sites](https://github.com/guess-js/guess/tree/master/experiments/guess-static-sites)
* [Using Guess.js with Angular, React, and Gatsby](https://github.com/guess-js/guess/tree/master/packages/guess-webpack)

### Usage

```bash
$ git clone git@github.com:daliborgogic/guess-nuxt && \
cd guess-nuxt

$ mv .env.example .env
# Update GA in .env

# Dev
$ npm run dev

# Build
$ npm run build

# Start
$ npm start
```

### Integration

Guess.js (**0.1.5 and above**) works with Nuxt.js with only two points of integration. All you need to do is add the `GuessPlugin` to `nuxt.config.js` and introduce a snippet for prefetching the pages which are likely to be visited Nuxt.

The following sections describe both points in details.

### Webpack Config

All you need is to extend the webpack config of your Nuxt.js application is to add the `GuessPlugin` to `nuxt.config.js` file, located in the root of your project. If the file does not exist, create it and add the following content:

```javascript
const { GuessPlugin } = require('guess-webpack')
const { GA } = process.env

module.exports = {
  build: {
    extend(config, ctx) {
      if (ctx.isClient) {
        config.plugins.push(
          new GuessPlugin({
          GA,
          runtime: {
            delegate: true
          },
          routeProvider: false
        })
      )
    }
  }
}
```

The routes that `guess()` returns depend on the Google Analytics report that it has extracted, together with the user's effective connection type.

### Credits

Based on [guess-next](https://github.com/mgechev/guess-next) by Minko Gechev [mgechev](https://github.com/mgechev) and Sébastien Chopin [Atinux](https://github.com/Atinux) for pull request [#1](https://github.com/daliborgogic/guess-nuxt/pull/1).

### License

MIT
