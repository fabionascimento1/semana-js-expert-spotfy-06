const defaultConfig = {
  coverageDirectory: "converge",
  coverageProvider: "v8",
  coverageReporters: [
    "text",
    "lcov",
  ],
  coverageThreshold: {
    global: {
      branch: 100,
      function: 100,
      lines: 100,
      statements: 100,
    }
  },
  maxWorkers: "50%",
  watchPathIgnorePatters: [
    "node_modules"
  ],
  transformIgnorePatters: [
    "node_modules"
  ]
}

export default {
  projects: [{
    ...defaultConfig,
    testEnvironment: "node",
    displayName: "backend",
    collectCoverageFrom: [
      "server/",
      "!server/index.js",
    ],
    transformIgnorePatters: [
      ...defaultConfig.transformIgnorePatters,
      "public"
    ],
    testMatch: [
      "**/tests/**/server/**/*.test.js"
    ]
  }, {
    ...defaultConfig,
    testEnvironment: "jsdom",
    displayName: "frontend",
    collectCoverageFrom: [
      "public/",
    ],
    transformIgnorePatters: [
      ...defaultConfig.transformIgnorePatters,
      "server"
    ],
    testMatch: [
      "**/tests/**/public/**/*.test.js"
    ]
  }]
}