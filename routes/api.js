const express = require("express");
const router = express.Router();
const Ninja =require('../models/ninja')
//get a ninja list
router.get('/ninja', function (req, res,next) {
//    Ninja.find({}).then(function(ninja){

//    })
Ninja.aggregate().near({
    near: {
     'type': 'Point',
     'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    maxDistance: 100000,
    spherical: true,
    distanceField: "dis"
   }).then(function(ninja){
    res.send(ninja)
});
});
//add a new ninja
router.post('/ninja', function (req, res,next) {
  // console.log(req.body);
Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
}).catch(next);
});

//update a ninja
router.put('/ninja/:id', function (req, res,next) {
   
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(
        function(){
           Ninja.findById({_id:req.params.id}).then(function(ninja){
               res.send(ninja)
           })
        }
    )
})
//delete a ninja
router.delete('/ninja/:id',function(req,res,next){
Ninja.findByIdAndRemove({_id:req.params.id}).then(
    function(ninja){
        res.send(ninja);

    }
)
    })


module.exports=router;