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
// your first API endpoint... 
app.get("/api/date/:date", function(req, res) {
  let dateObject;
  if (/^\d{5,}$/.test(req.params.date)) {
    dateObject = new Date(parseInt(req.params.date));
    console.log('aaaaaaaaaa',dateObject);

  } else {
    dateObject = new Date(req.params.date);

    console.log('aaaaaaaaaa',dateObject);
  }
  if (dateObject.toString() != "Invalid Date") {
    let dateJSON = {
      "unix": dateObject.valueOf(),
      "utc": dateObject.toUTCString()
    };
    console.log(req.params.date, dateObject, dateJSON);
    res.json(dateJSON);
  } else {
    res.json({ "error": "Invalid Date" });
  }
});


app.get("/api",(req,res)=> {

  const dateObj=   new Date();

  const UTC = dateObj.toUTCString();
  const UNIX = dateObj.getTime();

  res.json({
    utc : UTC, unix : UNIX
  })
})

// app.get("/api/:date", (req, res) => {
//   const dateObject = new Date();
//   console.log("🚀 ~ file: index.js:44 ~ app.get ~ dateObject", dateObject)
//   res.json({
//     "unix": dateObject.valueOf(),
//     "utc": dateObject.toUTCString() 
//   });
// });


// listen for requests :)
const port =  4000;
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});