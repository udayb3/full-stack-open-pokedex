import { defineConfig, devices } from '@playwright/test'
import path from 'path'

export default defineConfig({
  testDir: path.join(__dirname, '..'),
  fullyParallel: true,
  reporter: 'html',
  testIgnore: '*.jest.*',
  testMatch: '*.spec.js',
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ]
})