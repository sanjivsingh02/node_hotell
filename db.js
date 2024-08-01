const mongoose = require('mongoose')

//deFine the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'  // replace 'mydatabase' to your database name
//const mongoURL = 'mongodb+srv://singhsanjiv8888:kumkum88@cluster0.bxbcngq.mongodb.net/'
//set up mongoDb connection
mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

//get the default connection
//mongoose maintain a default connection object representing the mongoDB connections
const db = mongoose.connection

//define event listner for database connection

db.on('connected',()=>{
console.log("database is connected to a mongodb")
})

db.on('error',(err)=>{
  console.log("there is error in database")
  })

  db.on('disconnected',()=>{
    console.log("database is not connected to a mongodb")
    })
    



module.exports = db