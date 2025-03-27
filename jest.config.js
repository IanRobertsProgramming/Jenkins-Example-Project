module.exports = {
  // Indicates that the test environment is node
  testEnvironment: "node",
  // Indicates detailed output for test results
  verbose: true,
  // Indicates that the the test coverage reporting will track which parts 
  // of the code are executed during the tests and generate a report telling 
  // you which lines/functions are covered by the tests
  collectCoverage: true,
  // Indicates that the coverage report will be written to the coverage directory
  coverageDirectory: "coverage",
  // Indicates that jest will look for test files that end in the subdirectory
  // .test.js     e.g. index.test.js
  testMatch: ["**/*.test.js"]
};