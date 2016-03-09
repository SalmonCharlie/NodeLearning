var express = require('express')
var app = express()

app.use(express.static('assets'));
 
app.get('/', function (req, res) {
  res.send('NodeLearningExpress')
})

app.get('/JSON', function (req, res) {
  res.json('NodeLearningExpress')
})
 
app.listen(8081)
console.log('Server running: localhost:8081/');


