const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')

const e2eOverride = {
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
  viewportWidth: 390,
  viewportHeight: 844
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
