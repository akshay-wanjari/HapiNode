'use strict'
const Hapi=require('hapi');
const server=new Hapi.Server();
const userRouter = require('./route')
const dbConnect = require('./mongoDB').connectDB;

server.connection({
    port: 8000,
    host: 'localhost'
});

dbConnect(client => {
    console.log(client)
})
server.start(()=>{
    console.log('Server running at:', server.info.uri)
})


server.route(userRouter)

