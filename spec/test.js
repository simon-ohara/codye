var app = require('../app');

// app.use(express.static(__dirname + '/app'));

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

