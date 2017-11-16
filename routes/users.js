var express=require('express');
var router=express.Router();
router.get('/',function(req,res){
    //console.log('dashboard USERS');
    res.render('userindex');
});
router.get('/history',function(req,res){
    res.render('uhistory');
});
router.get('/schedule',function(req,res){
    res.render('uschedule');
});
router.get('/classes',function(req,res){
    res.render('uclasses');
});

module.exports=router;
