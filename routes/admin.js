var express=require('express');
var router=express.Router();
router.get('/',function(req,res){
res.render('adashboard');
});

router.get('/use',function(req,res){
  res.render('ausers');
});
router.get('/academics',function(req,res){
    res.render('aacademics');
});
router.get('/stats',function(req,res){
    res.render('astats');
});
router.get('/schedule',function(req,res){
    res.render('aschedule');
});
router.get('/classes',function(req,res){
    res.render('aclasses');
});
router.get('/feedback',function(req,res){
    res.render('afeedback');
});




module.exports=router;
