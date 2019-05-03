'use strict'
const connectDB=require('./mongoDB');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/";
const getDb = require('./mongoDB').getDb;
const config=require('./config');

const getUserVehicle = (req,res)=>{
    config.aggregate('customers').then((result)=>{
        res(result)
    }).catch((err)=>{
        console.log(err); 
    })
 }

const postUser=(req,res)=>{
    var myobj = { name: req.payload.name, address: req.payload.address,Adhar: req.payload.Adhar };
    config.insertCustomer('customers',myobj);
    res('inserted');
}

const getVehicle = (req,res)=>{
    config.find('vehicles').then((result) => {
        res(result)
    }).catch((err) => {
        console.log(err)
    });
}

const getVehicleId = (req,res)=>{
    config.findId('vehicles').then((result) => {
        res(result)
    }).catch((err) => {
        console.log(err)
    });
}

const postVehicle=(req,res)=>{
    var myobj = { vin:req.payload.vin ,vehicleName: req.payload.vehicleName ,modelName:req.payload.modelName,Adhar: req.payload.Adhar,};
    config.insertVehicle('vehicles',myobj);
    res('inserted')
}


const userRouter = [
    {
        method:'GET',
        path:'/api/user',
        handler: getUserVehicle
    } ,
    {
        method:'POST',
        path:'/api/user',
        handler: postUser
    },
    {
        method:'GET',
        path:'/api/vehicle',
        handler: getVehicle
    },
    {
        method:'POST',
        path:'/api/vehicle',
        handler: postVehicle
    },
    {
        method:'GET',
        path:'/api/vehicleId',
        handler: getVehicleId
    }
    
]

module.exports = userRouter;
