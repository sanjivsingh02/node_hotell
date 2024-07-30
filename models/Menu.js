const mongoose =require('mongoose')


const menuItemSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
  type:Number,
  required:true
  },
  taste:{
    type:String,
    enum:['sweet','sour','spicy'],
    required:true
  },
  its_drink:{
    type:Boolean
   
  },
  ingredient:{
    type:String,
   
  },
  num_sales:{
    type:Number
  }
})

const menu = mongoose.model('menu',menuItemSchema)
module.exports = menu