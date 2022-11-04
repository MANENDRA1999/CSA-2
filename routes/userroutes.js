var express = require ('express')
var router = express.Router()
var usermodel = require('../models/usermodel')


router.get('/',async (req,res)=>{
    try{ var data = await usermodel.find()
     res.json(data)
    }
    catch (err) {
     res.json({ message: err});
    }
  })

router.post('/',(req,res)=>{
    const userModel = new usermodel({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email : req.body.email,
        mobile : req.body.mobile,
        password : req.body.password

    } );  
    userModel.save().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json({ message: err});
    });

});
router.patch('/:postID',async(req,res)=>{
    try
    { 
        var updateddata = await usermodel.updateOne({_id : req.params.postID},
            {
                $set: {
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    email : req.body.email,
                    mobile : req.body.mobile,
                    password : req.body.password
                },
            });
        res.json(updateddata);
       }
       catch (err) {
        res.json({ message: err});
       }
  });
  
  
  router.get('/:postID',async(req,res)=>{
    try
    { 
        var data1 = await usermodel.findById(req.params.postID)
        res.json(data1)
       }
       catch (err) {
        res.json({ message: err});
       }
  })
  
  
  router.delete('/:postID',async(req,res)=>{
    try
    { 
        var deletedata = await usermodel.remove( {_id : req.params.postID});
        res.json(deletedata);
       }
       catch (err) {
        res.json({ message: err});
       }
  })
module.exports=router;