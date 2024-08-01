const express = require('express')
const router = express.Router()
const menu =require("./../models/menu")

router.post('/',async (req,res)=>{
  try{
    const data = req.body // assuming the request body contain the person data
  
    //craete the new Person document using the mongoose the model
    
    const  newMenu = new menu(data)
    
    // save the new person data
   const savedMenu = await newMenu.save()
   console.log('item saved :')
   res.status(200).json(savedMenu)
    
    
  }catch(err){
  console.log(err)
  res.status(500).json({error:"internal server error"})
  }
  })
  
 router.get('/', async(req,res)=>{
    try{
      const data = await menu.find()
      console.log('data fetched :')
      res.status(200).json(data)
    }catch(err){
      console.log(err)
      res.status(500).json({error:"internal server error"})
    }
  })

  router.get('/:tasteType', async (req,res)=>{
    try{
     const tasteType  = req.params.tasteType 
     if(tasteType === "sweet" || tasteType  === "sour" || tasteType  === "spicy"){
       const respone = await menu.find({taste:tasteType })
       res.status(200).json(respone)
     }else{
      res.status(200).json({error:'invalid work type'})
     }
    }catch(err){
      res.status(500).json({error:"internal server error"})
     
    }
  })
  
  router.put('/:id', async (req,res) =>{
    try{
    const menuId = req.params.id;
    const updatedMenuData = req.body
  
    const response = await menu.findByIdAndUpdate(menuId,updatedMenuData,{
      new:true,
      runValidators:true
    })

  
    if(!response){
      res.status(404).json({error:'menu not found'})
    }
    console.log('data updated :')
   res.status(200).json(response)
  
    }catch(err){
      res.status(500).json({error:"internal server error"})
    }
  })


module.exports = router