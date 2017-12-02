var express=require('express');
var router=express.Router();
var passport=require('passport');
var localStrategy=require('passport-local');
var User=require('../models/user');
router.get('/',isloggedin,function(req,res){
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
//AUTH ROUTES
router.get('/register',function(req,res){
    res.render('aregister');
});
router.post('/register',function(req,res){
   User.register({username:req.body.username},req.body.password,function(err,admin){
       if(err){
           console.log(err);
           return res.redirect('/register');
       }
       else{
         passport.authenticate("local")(req,res,function(){
            res.redirect('/userindex');
             console.log(admin);
        });
          
       }
   });
});
router.get('/login',function(req,res){
    res.render('ulogin');
});
router.post('/login',passport.authenticate("local",{
    successRediect:'/userindex',
    failureRedirect:'/login'
}),function(req,res){
    
});

router.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
});

function isloggedin(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/users/login');
}

module.exports=router;
