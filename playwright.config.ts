import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e/playwright',
  timeout: 30000,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'https://google.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  outputDir: 'artifacts/playwright'
});
