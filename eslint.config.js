const pluginCypress = require('eslint-plugin-cypress/flat')

module.exports = [
  pluginCypress.configs.recommended,
  {
    rules: {
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/no-async-before': 'error',
      'cypress/no-pause': 'error',
      'cypress/no-debug': 'error'
    }
  }
]
