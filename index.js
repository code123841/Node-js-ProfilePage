const express = require("express");
const app = express();
const ejs = require('ejs');
const port = 5000;
const fs = require('fs')
// setting up static files 
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/fonts' , express.static(__dirname + 'public/fonts'))
app.use('/img' , express.static(__dirname + 'public/img'))

app.set('view engine' , 'ejs')


app.get('/', (req, res) => {
    // console.log("user has entered the home page")
    res.render('index/index')
  });

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

