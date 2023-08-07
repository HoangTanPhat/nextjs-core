module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  verbose: true,
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "@/lib/(.*)": "<rootDir>/src/lib/$1",
  },
};
