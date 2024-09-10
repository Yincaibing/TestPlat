const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "i75hgf",
  e2e: {
    baseUrl: 'http://localhost:8080',
  },
});
