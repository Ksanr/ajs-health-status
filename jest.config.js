module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/js/http.js'],
};
