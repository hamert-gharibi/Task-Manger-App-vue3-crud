const express=require("express");
const router=express.Router();
const Todo=require('../models/Todos');

//Get all Todo
router.get("/", async (req, res)=>{
    const todos=await Todo.find();
    res.json(todos)
})

//Create new todo
router.post ('/new', async (req,res)=>{
    const newTodo=new Todo(
      req.body // What the Vue app is sending 
      /* 
         {
             author:"Flanders",
             todo:"Go to Canada"
         }*/
    );
    const savedTodo=await newTodo.save()
    res.json(savedTodo)
})

//Getter by id 
router.get ('/get/:id', async (req,res)=>{
    const t =await Todo.findById({_id : req.params.id})
    res.json(t)
})
//Delete todo  by id 
router.delete ('/delete/:id', async (req,res)=>{
    const tDelete  =await Todo.findByIdAndDelete({_id : req.params.id})
    res.json(tDelete )
})
//Update todo  by id 
router.put ('/update/:id', async (req,res)=>{
    const tUpdate  =await Todo.updateOne(
        {_id: req.params.id} ,
         {$set: req.body}
        /*{
            author:"FBart",
             todo:"Skating"
        }*/
    )
    res.json(tUpdate )
})


module.exports=router 