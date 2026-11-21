const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:3001",
    supportFile: false,
    video: true,                  // graba un video de toda la corrida
    screenshotOnRunFailure: true  // captura automatica cuando una prueba falla
  }
})
