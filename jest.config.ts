/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  testEnvironment: 'node',
  testTimeout: 100000,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
