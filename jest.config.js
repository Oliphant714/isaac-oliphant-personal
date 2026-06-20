module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/dist/**',
    '!jest.config.js',
    '!sum.test.js'
  ]
};
