exports.config = {
  allScriptsTimeout: 11000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/views/index-spec.js'],
  // specs: ['spec/views/**/*-spec.js'],
  baseUrl: 'http://localhost:3000/',
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
