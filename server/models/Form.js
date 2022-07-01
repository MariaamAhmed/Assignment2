const mongoose = require("mongoose");

const CarsSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    color:{
        type: String,
        required:true,
    },
    model:{
        type: String,
        required:true,
    },
    manufacturer:{
        type: String,
        required:true,
    },
    passengercapacity:{
        type: String,
        required:true,
    },
})

const CarModel= mongoose.model('cars', CarsSchema)

module.exports = CarModel;