// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// ? timestamp micro service
app.get("/api/:date",(req,res)=> {

  // ? 
  const dateString = req.params.date;
 let datefetch ;

  if(!dateString) {
    datefetch = new Date();
  } else {
    if(!isNaN(dateString)) {
      datefetch = new Date(parseInt(dateString));
    } else {
      datefetch = new date(dateString)
    }
  }

  // @ts-check
  if(dateString.toString === 'Invalid Date') {
    res.json({ error : datefetch.toString()})
  } else {
    res.json({ unix : datefetch.getTime(), utc : datefetch.toUTCString()})
  }
})




// listen for requests :)
var listener = app.listen(4000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});