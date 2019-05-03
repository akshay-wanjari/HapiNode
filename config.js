const getDb = require('./mongoDB').getDb;
const ObjectId = require('mongodb').ObjectID;
const Buffer=require('safe-buffer').Buffer;
 

const find=(collection)=>{
    var db = getDb();
    console.log('get_Vehicle')
    return db.collection(collection).find({},{ projection: { _id: 0} }).toArray()
        
}

const findId=(collection)=>{
    var db = getDb();
    console.log('get_Vehicle_id')
    //var query = { _id: "5cc9d656ce4b1e233a6b1bc5" };
    return db.collection(collection).findOne(
        { _id : new ObjectID(Buffer.from(id, 'hex')) }
    )
        
}

const insertCustomer=(collection,myobj) => {
     var db=getDb();
     console.log(myobj)
     db.collection(collection).createIndex({ Adhar: 1},{unique: true})
        return db.collection(collection).insertOne(myobj).then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })

}
const insertVehicle=(collection,myobj) => {
    var db=getDb();
    console.log(myobj)
    db.collection(collection).createIndex({ vin: 1},{unique: true})
       return db.collection(collection).insertOne(myobj).then(result => {
           console.log(result)
       })
       .catch(err => {
           console.log(err)
       })

}

const aggregate=(collection)=>{
    var db = getDb();
    console.log('get_User')
    return db.collection(collection).aggregate([

        { $lookup:
           {
            from: 'vehicles',
             localField: 'Adhar',
             foreignField: 'Adhar',
             as: 'Vehicles'
           }
        }
    ]).toArray()  
}

module.exports = {
        insertCustomer: insertCustomer,
        find:find,     
        aggregate:aggregate,
        findId:findId,
        insertVehicle:insertVehicle
     }