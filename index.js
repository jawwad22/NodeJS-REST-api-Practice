const express = require("express");
const routes=require('./routes/api')
const bodyParser=require('body-parser')
const mongoose =require('mongoose');

//set up express app
const app=express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise=global.Promise

app.use(bodyParser.json());
app.use('/api',routes);

//listen for requests
app.listen(process.env.port||4000,function(){
console.log('now listening for requests');
});
