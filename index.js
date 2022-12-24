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


// ?  your first API endpoint... 


app.get("/api/:date?", (req, res) => {
 
let timestamp = req.params.date;
console.log("🚀 ~ file: index.js:28 ~ app.get ~ timestamp", timestamp)


if(timestamp.match(/\d{5,}/g)) {
  timestamp =+ timestamp;
}

let date = new Date(timestamp);
console.log("🚀 ~ file: index.js:36 ~ app.get ~ date", date)

if(date.toUTCString() === "Invalid Date") {
  res.json({ error : date.toUTCString()})
}

res.json({ unix : date.valueOf() , utc : date.toUTCString()})
});


app.get("/api/timestamp/date", (req,res) => {

  let date = new Date();
  let UTC = date.getTime();
  UTC = new Date(UTC);
  UTS = UTC.toUTCString();
  let UNIX = date.getTime();
  res.json({ unix: UNIX, utc: UTS });
})




// listen for requests :)
const port =  4000;
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});