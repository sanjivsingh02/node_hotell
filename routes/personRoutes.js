const express = require('express')
const router = express.Router()
const person =require("./../models/person")
// post route add person
router.post('/',async (req,res)=>{
try{
  const data = req.body // assuming the request body contain the person data

  //craete the new Person document using the mongoose the model
  
  const  newPerson = new person(data)
  
  // save the new person data
 const savedPerson = await newPerson.save()
 console.log('data saves :')
 res.status(200).json(savedPerson)
  
  
}catch(err){
console.log(err)
res.status(500).json({error:"internal server error"})
}
})


// to get the data
router.get('/', async(req,res)=>{
  try{
    const data = await person.find()
    console.log('data fetched :')
    res.status(200).json(data)
  }catch(err){
    console.log(err)
    res.status(500).json({error:"internal server error"})
  }
})

router.get('/:workType',async (req,res)=>{
  try{
   const workType = req.params.workType
   if(workType === "chef" || workType === "waiter" || workType === "manager"){
     const respone = await person.find({work:workType})
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
  const personId = req.params.id;
  const updatedPersonData = req.body

  const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
    new:true,
    runValidators:true
  })

  if(!response){
    res.status(404).json({error:'peron not found'})
  }
  console.log('data updated :')
 res.status(200).json(response)

  }catch(err){
    res.status(500).json({error:"internal server error"})
  }
})

router.delete("/:id", async (req,res) =>{
  try{
  const personId = req.params.id
 
  
  const response = await person.findByIdAndDelete(personId)
    
  if(!response){
    res.status(404).json({error:'peron not found'})
  }
  onsole.log('data deleted :')
  res.status(200).json(response)
 
  }catch(err){
    res.status(500).json({error:"internal server error"})
  }
})

module.exports = router