var express=require('express');
var router=express.Router();
var passport=require('passport');
var localStrategy=require('passport-local');
var Admin=require('../models/admin');
/*router.use(function(req,res,next){
    res.locals.currentuser=req.admin;
    next();
});
*/

router.get('/',isloggedin,function(req,res,next){
    var currentuser=req.user.role;
    if(currentuser.toLowerCase()=="admin")
        {
    console.log(req.user);
    next();
        }
    else{
        //res.render('userindex');
        res.redirect('/users');
    }
    
},function(req,res){
res.render('adashboard');
  //  console.log(req.user.role);
    
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
/*
//AUTH ROUTES
router.get('/register',function(req,res){
    res.render('aregister');
});
router.post('/register',function(req,res){
   Admin.register({username:req.body.username,role:req.body.role},req.body.password,function(err,admin){
       if(err){
           console.log(err);
           return res.redirect('/admin/register');
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
    failureRedirect:'/admin/login'
}),function(req,res){
    res.render('admin');
});

router.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
});
*/
function isloggedin(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/admin/login');
}
module.exports=router;
