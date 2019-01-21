const express = require("express");
const router = express.Router();
const Ninja =require('../models/ninja')
//get a ninja list
router.get('/ninja', function (req, res,next) {
    res.send({ type: 'GET' });
})
//add a new ninja
router.post('/ninja', function (req, res,next) {
  // console.log(req.body);
Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
}).catch(next);
});

//update a ninja
router.put('/ninja/:id', function (req, res,next) {
   
    res.send({ type: 'PUT' });
})
//delete a ninja
router.delete('/ninja/:id',function(req,res,next){
    res.send({type:'DELETE'});
    })


module.exports=router;