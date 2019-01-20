const express = require("express");
const router = express.Router();
//get a ninja list
router.get('/ninja', function (req, res) {
    res.send({ type: 'GET' });
})
//add a new ninja
router.get('/ninja', function (req, res) {
    res.send({ type: 'POST' });
})

//update a ninja
router.get('/ninja/:id', function (req, res) {
    res.send({ type: 'PUT' });
})
//delete a ninja
router.get('/ninja/:id',function(req,res){
    res.send({type:'DELETE'});
    })
