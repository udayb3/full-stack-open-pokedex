/** @type {import('jest').Config} */

const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  rootDir: './',
  testMatch: ['<rootDir>/test/*.jest.spec.*']
}

module.exports = config