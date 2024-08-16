const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 800,
    viewportWidth: 1200,
    defaultCommandTimeout: 5000,
    retries: {
      runMode: 1,
      openMode: 1
    }
  },
});
