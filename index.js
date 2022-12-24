// index.js


var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  


app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// ?  timestamp api 

app.get("/api/:date?", (req, res) => {
 
let timestamp = req.params.date|| new Date().toUTCString();
console.log("🚀 ~ file: index.js:28 ~ app.get ~ timestamp", timestamp)


if(timestamp.match(/\d{5,}/g)) {
  timestamp =+ timestamp;
} 

let date = new Date(timestamp);
console.log("🚀 ~ file: index.js:36 ~ app.get ~ date", date)

if(date.toUTCString() === "Invalid Date") {
  return res.json({ error : date.toUTCString()})
}

return res.json({ unix : date.valueOf() , utc : date.toUTCString()})
});



// ? empty path 
app.get("/api/timestamp/date", (req,res) => {

  console.log('request ',req.params);

  let date = new Date();
  let UTC = date.getTime();
  UTC = new Date(UTC);
  UTS = UTC.toUTCString();
  let UNIX = date.getTime();
 return  res.json({ unix: UNIX, utc: UTS });
})




// ? server listen port
const port =  4000;
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});