
var express = require('express');
var app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const path =require('path')




app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/', require('./routes/api').route)


var port = Number(process.env.PORT || 8800);

app.use('/', express.static(path.join(__dirname, 'public')))

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});