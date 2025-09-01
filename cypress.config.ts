import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://google.com',
    specPattern: 'e2e/cypress/**/*.cy.ts',
    supportFile: false
  },
  reporter: 'spec',
  screenshotsFolder: 'artifacts/cypress/screenshots',
  videosFolder: 'artifacts/cypress/videos',
  video: false,
  screenshotOnRunFailure: true
});