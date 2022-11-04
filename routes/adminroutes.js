var express = require ('express')
var router = express.Router()
var adminmodel = require('../models/adminmodel')


router.get('/',async (req,res)=>{
    try{ var data = await adminmodel.find()
     res.json(data)
    }
    catch (err) {
     res.json({ message: err});
    }
  })

router.post('/',(req,res)=>{
    const adminModel = new adminmodel({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email : req.body.email,
        mobile : req.body.mobile,
        password : req.body.password

    } );  
    adminModel.save().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json({ message: err});
    });

});
router.patch('/:postID',async(req,res)=>{
    try
    { 
        var updateddata = await adminmodel.updateOne({_id : req.params.postID},
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
        var data1 = await adminmodel.findById(req.params.postID)
        res.json(data1)
       }
       catch (err) {
        res.json({ message: err});
       }
  })
  
  
  router.delete('/:postID',async(req,res)=>{
    try
    { 
        var deletedata = await adminmodel.remove( {_id : req.params.postID});
        res.json(deletedata);
       }
       catch (err) {
        res.json({ message: err});
       }
  })
module.exports=router;