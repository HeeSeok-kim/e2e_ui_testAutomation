const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')

const e2eOverride = {
  userAgent:
    'Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
  viewportWidth: 412,
  viewportHeight: 915
}

module.exports = defineConfig({
  e2e: {
    ...baseConfig.e2e,
    ...e2eOverride
  },
  env: {
    ...baseConfig.env
  }
})
