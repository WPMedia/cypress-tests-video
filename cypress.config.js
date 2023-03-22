const { defineConfig } = require("cypress");
  /** add cypress project Id and baseURLs here */
module.exports = defineConfig({
  env: {
    baseUrl:'https://sandbox.staging.arcpublishing.com',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  projectId: 'ux4fnm',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://sandbox.staging.arcpublishing.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  viewportWidth: 1200,
  viewportHeight: 700,
})

