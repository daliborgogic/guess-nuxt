const { Nuxt, Builder } = require('nuxt-edge')
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)

if (nuxt.options.dev) {
  new Builder(nuxt).build()
}

module.exports = (req, res) => {
  return nuxt.render(req, res)
}
