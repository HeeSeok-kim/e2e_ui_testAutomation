const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  baseUrl: process.env.baseUrl,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
  env: {
    id: process.env.id,
    pw: process.env.pw
  }
})
