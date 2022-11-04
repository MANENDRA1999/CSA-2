var express = require ('express')
var router = express.Router()
var menumodel = require('../models/menumodel')


router.get('/',async (req,res)=>{
  try{ var data = await menumodel.find()
   res.json(data)
  }
  catch (err) {
   res.json({ message: err});
  }
})

router.post('/',(req,res)=>{
    const menuModel = new menumodel({
        itemname:req.body.itemname,
        category:req.body.category,
        price : req.body.price,
        availability : req.body.availability

    } );  
    menuModel.save().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json({ message: err});
    });

});

router.patch('/:postID',async(req,res)=>{
  try
  { 
      var updateddata = await menumodel.updateOne({_id : req.params.postID},
          {
              $set: {
                  itemname:req.body.itemname,
                  category:req.body.category,
                  price : req.body.price,
                  availability : req.body.availability
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
      var data1 = await menumodel.findById(req.params.postID)
      res.json(data1)
     }
     catch (err) {
      res.json({ message: err});
     }
})


router.delete('/:postID',async(req,res)=>{
  try
  { 
      var deletedata = await menumodel.remove( {_id : req.params.postID});
      res.json(deletedata);
     }
     catch (err) {
      res.json({ message: err});
     }
})

module.exports = router