const express = require('express')
const app = express()
const registerRouter = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended : true} ))
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
var path = require('path')
var port = 8000


// serve html files/pages and design
//app.use('/cssFiles', app.static(__dirname + '/public'))
app.use('/', express.static(path.join(__dirname, 'public'))) // app.use('/public',

/* MONGODB SCHEMA FILE
app.use('/user', express.static(path.join(__dirname, 'api')))
app.get('/api/user', function (req, res) { 
  res.sendFile(path.join(__dirname+'/api/user.js'))
 })
 */

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

  app.get('/registerPage', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/registerPage.html'))
  })

  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/loginPage.html'))
  })

  // Collect post data and send it to the dabanase(MONGODB)
    const router = require('./addStoryJS.js')
    app.use(router)

  // Add registration to the server
  // Implement it the same way ass router(AddStoryJS)
  const auth = require('./user.js')
  app.use(registerRouter)
  
  app.listen(port)