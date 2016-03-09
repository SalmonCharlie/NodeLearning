var express = require('express')
var app = express()

//variables
var port = 8081

//config
app.set('view engine', 'mustache');
app.register(".mustache", require('stache'));

//routes
app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.render('index', {
    locals: {
      title: 'Welcome'
    }
  });
});

app.get('/JSON', function (req, res) {
  res.json('NodeLearningExpress')
})

app.use(function(req, res, next) {
  res.status(404).send('Page not found');
});
 
app.listen(port)
console.log('Server running: localhost:' port);


