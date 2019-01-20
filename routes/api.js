const express = require("express");
const router = express.Router();
//get a ninja list
router.get('/ninja', function (req, res) {
    res.send({ type: 'GET' });
})
//add a new ninja
router.post('/ninja', function (req, res) {
   console.log(req.body);
    res.send({ type: 'POST',
    name:req.body.name,
    rank:req.body.rank 
});
})

//update a ninja
router.put('/ninja/:id', function (req, res) {
   
    res.send({ type: 'PUT' });
})
//delete a ninja
router.delete('/ninja/:id',function(req,res){
    res.send({type:'DELETE'});
    })


module.exports=router;