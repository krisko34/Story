const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended : true} ))
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/node-demo')

var storySchema = new mongoose.Schema({
  writtenStory: String
})

var Stories = mongoose.model("Stories", storySchema)

router.post('/addStory', function (req, res) { // urlencodedParser
    var myData = new Stories(req.body)
    myData.save()
    .then(item => {
     res.send('item saved to database')
     //ADD PAGE SAYING THAT THE STORY IS SAVED
    })
    .catch(err => {
      res.status(400).send('ne stava')
    })
})

module.exports = router