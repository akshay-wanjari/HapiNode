'use strict'
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/";
let _db;
const connectDB = () => { 
  MongoClient.connect(url, {useNewUrlParser: true})
   .then(client => {
     console.log('connected')
     _db = client.db('NodeProject')
   }).catch(err => {
     throw "no connected"
   })
}
const getDb = () => {
    if(_db) { 
      return _db
    }
    return console.log("no database created")
  }
  
module.exports = {
    connectDB: connectDB,
    getDb: getDb
};