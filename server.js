'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });



// app.get('/hello', function(req, res){
//   res.json({greetings: "Hello, API"});
// });


app.post('/api/fileanalyse',multer().single('upfile'),(req,res) => {
let responseObject = {}
responseObject['name'] = req.file.originalname
responseObject['type'] = req.file.mimetype
responseObject['size'] = req.file.size

res.json(responseObject)
})


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
