const express = require("express")
var app = express()
app.get("/*",function(request,res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  console.log("Request :"+decodeURIComponent(request.originalUrl))
  //console.dir(request)
  res.send("Hello World!")
})
port=8080
app.listen(port, function () {
console.log("Started application on port %d", port)
});

