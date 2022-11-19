module.exports = {
  preset: 'ts-jest',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  rootDir: "src",
  testEnvironment: "jsdom"
};