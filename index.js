const express = require("express");
const app = express();
const ejs = require('ejs');
const port = 5000;
const fs = require('fs')
// setting up static files 
app.use(express.static('public'))

app.set('view engine' , 'ejs')


app.get('/', (req, res) => {
  fs.readFile('./views/index/index.ejs' ,(err,data)=> {
    if(err){
      throw err
    }
    res.write(data)
  })
 
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

