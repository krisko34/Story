const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended : true} ))
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
var path = require('path')
var port = 8000

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/node-demo')

var storySchema = new mongoose.Schema({
  writtenStory: String
})

var Stories = mongoose.model("Stories", storySchema)

// serve html files/pages and design
//app.use('/cssFiles', app.static(__dirname + '/public'))
app.use('/', express.static(path.join(__dirname, 'public'))) // app.use('/public',

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/testFrontPage.html'))
  })

app.get('/addStory', function (req, res) {
    //res.render('addStory', {qs: req.query})
    res.sendFile(path.join(__dirname+'/public/addStory.html'))
  })

  app.get('/favorites', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/favorites.html'))
  })

  app.get('/friends', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/friends.html'))
  })

  app.get('/gallery', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/gallery.html'))
  })

  app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/contactPage.html'))
  })

  app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/registerPage.html'))
  })

  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/loginPage.html'))
  })

  // collect post data and send it to the dabanase(MONGODB)
  app.post('/addStory', function (req, res) { // urlencodedParser
        var myData = new Stories(req.body)
        myData.save()
        .then(item => {
          res.send('item saved to database')
        })
        .catch(err => {
          res.status(400).send('ne stava')
        })
  })

app.listen(port)