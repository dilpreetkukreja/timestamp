// server.js

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(
  cors({
    optionSuccessStatus: 200,
  })
); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({
    greeting: 'hello API',
  });
});

app.get('/api/timestamp/', (req, res) => {
  res.json({
    unix: Date.now(),
    utc: Date(),
  });
});
app.get('/api/timestamp/:date_string', function (req, res) {
  const date_string = req.params.date_string;
  let output = {
    unix: '',
    utc: '',
  };

  let date;
  if (isNaN(date_string)) {
    date = new Date(date_string);
    if (date == 'Invalid Date') {
      output = {
        error: 'Invalid Date',
      };
    } else {
      output.unix = date.getTime();
      output.utc = date.toUTCString();
    }
  } else {
    date = new Date(+date_string);
    if (date == 'Invalid Date') {
      output = {
        error: 'Invalid Date',
      };
    } else {
      output.unix = +date_string;
      output.utc = date.toUTCString();
    }
  }

  res.json(output);
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
