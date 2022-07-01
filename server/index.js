const express =require("express")
const app= express()
const mongoose=require("mongoose")
const cors=require("cors")
const CarModel =require('./models/Form')
require("./database")
app.use(express.json())
app.use(cors())

app.post('/addCar',async(req,res)=>{

const name= req.body.name;
const color= req.body.color;
const model= req.body.model;
const manufacturer= req.body.manufacturer;
const passengercapacity= req.body.passengercapacity;

const cars= new CarModel({name: name, color:color, model: model,manufacturer:manufacturer ,passengercapacity: passengercapacity
})
 await cars.save();
res.send("data inserted")
})


app.get('/read',async(req,res)=>{
    CarModel.find({}, (err, result)=>{
    if(err){
        res.send(error);
    }    
    else{
        res.send(result);

    }
    } ) 
    await cars.save();
   res.send("inserted Data")
   })

   app.get('/read',async(req,res)=>{
    const cars= new CarModel({name: "Audi",color:"black",model:"R8",manufacturer:"Audi",passengercapacity:"2"
   })
    await cars.save();
   res.send("inserted Data")
   })

app.listen(3001, ()=>{
    console.log("running on port 3001");
})
