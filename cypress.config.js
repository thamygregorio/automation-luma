const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  requestTimeout: 30000,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
  experimentalStudio: true,
  experimentalWebKitSupport: true,
  video: false,
  reports: false,
  screenshots: false,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "http://139.162.47.20/magento222/",
  },
});
