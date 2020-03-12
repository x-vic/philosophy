const themeReco = require('./themeReco.js')

const sidebar = require('../sidebar/')
// const locales = require('../locales/')
const nav = require('../nav')

module.exports = Object.assign({}, themeReco, {
  head: [
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  sidebar,
  // locales,
  nav,
})
