import { defineConfig } from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
   setupNodeEvents(on, config) {
    config.defaultCommandTimeout= 10000;
    config.responseTimeout= 20000;
    config.pageLoadTimeout= 60000;
     return config;
    },
  },
});
