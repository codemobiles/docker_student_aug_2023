const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const Item = require('./item');
const app = express();
const Jimp = require('jimp') ;



// Connect to MongoDB
console.log('Connection to mongoDb on uri: ' + config.mongo.uri);
mongoose.connect(config.mongo.uri, config.mongo.options,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Parsers for POST data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

rotate = async (degree, imagePath)=> {
  console.log("Begin rotating..")
  // Reading Image  
  const image = await Jimp.read(imagePath);
  
  // Checking if any error occurs while rotating image
  image.rotate(degree, function(err){
     if (err) throw err;
  })
  .write(imagePath);
}


app.get('/', async (req, res) => {
  const items = await Item.find().sort({date: -1})
  res.json(items)
});

app.get('/add/:name', async (req, res) => {
  console.log(JSON.stringify(req.params))
  const newItem = new Item({name: req.params.name});
  await newItem.save()
  res.redirect('/')  
});

app.get('/clear', async (req, res) => {  
  await Item.remove();    
  res.redirect('/')  
});


app.get('/rotate/:imageName', async (req, res) => {    
  const imagePath = `${__dirname}/images/${req.params.imageName}`
  await rotate(90, imagePath);    
  res.end("Rotate successfully")  
});


app.listen(config.port, () => console.log(`Example app listening on ${config.port}!`))