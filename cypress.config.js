const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
    },
  },
});
