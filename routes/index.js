var express=require('express');
var router=express.Router();
var passport=require('passport');
var localStrategy=require('passport-local');
var Admin=require('../models/admin');
router.get('/',function(req,res){
    //console.log('INDEX');
    res.render('index');
});

//AUTH ROUTES
router.get('/register',function(req,res){
    res.render('aregister');
});
router.post('/register',function(req,res){
   Admin.register({username:req.body.username,role:req.body.role},req.body.password,function(err,admin){
       if(err){
           console.log(err);
           return res.redirect('/register');
       }
       else{
         passport.authenticate("local")(req,res,function(){
            res.redirect('/admin');
             console.log(admin);
        });
          
       }
   });
});
router.get('/login',function(req,res){
    res.render('alogin');
   // reroute();
    
});
router.post('/login',passport.authenticate("local",{
    successRediect:'/admin',
    failureRedirect:'/login'
}),function(req,res){
    res.render('admin');
});

router.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
});

module.exports=router;
