const express= require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

//create out express app

const app=express()

//Handle CORS + middleware
app.use (function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); //if uing .fetch and not axios 
    res.header("Access-Control-Allow-Headers", "auth-token,Origin,X-Requested-With, Content-Type, Accept");
    next();
})

//database stuff 
const uri="mongodb+srv://dbuser:Hmdgh4321@cluster0.kvbec.mongodb.net/shop-db-dev?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("MongooDB connected")
})
.catch(err => console.log(err)) 

app.use(bodyParser.json())

//routes
app.get("/", (res, req)=>{
    res.send("yey home page")
})

const TodosRoute= require ('./routes/Todos')
app.use('/todos', TodosRoute)

//Start server

app.listen(3000, () =>{
    console.log("Listining at port 3000")
})
 