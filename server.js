const express = require('express')
const app = express()
const db = require('./db')

const bodyParser= require('body-parser')
app.use(bodyParser.json())




app.get('/', function (req, res) {
  res.send('hello welcome to your hotel... how can i help you ? ')
})




const mennRoutes = require('./routes/mennRoutes')
app.use('/Menu',mennRoutes) 

  //import the router
  const personRoutes = require('./routes/personRoutes')
 //use router
 app.use('/person',personRoutes)

app.listen(3000,()=>{
  console.log("serevr is live 3000")
})