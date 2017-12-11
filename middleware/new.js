var passport=require('passport');
var passportLocalMongoose=require('passport-local-mongoose');
var Admin=require('../models/admin');
var middlewareobj={};
middlewareobj.reroute=function(req,res,next){
    console.log(currentuser.role)
}