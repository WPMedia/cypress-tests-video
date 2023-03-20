const { defineConfig } = require("cypress");
  /** add cypress project Id and baseURLs here */
module.exports = defineConfig({
  env: {
    baseUrl:'',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  projectId: '',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: '',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  viewportWidth: 1200,
  viewportHeight: 700,
})
