var Browser = require('zombie');

// We call our test example.com
Browser.localhost('example.com', 3000);

// Load the page from localhost
var browser = Browser.create();
browser
.visit('/')
.then(function() {
  browser.assert.success();
  browser.assert.text('title', 'Welcome To Brains Depot');
});
