var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var myOutput = 	{
    ipaddress: null,
    language: null,
    system: null
};
	
app.get('/', function (req, res) {
    myOutput.ipaddress = req.ip;
    myOutput.language = req.headers["accept-language"];
    myOutput.system = req.headers['user-agent'];
    res.send(myOutput);
});

app.listen(port, function () {
    console.log('Example app listening on port' +port+ ' !');
});