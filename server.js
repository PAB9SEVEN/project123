var express=require('express');
var exphbs=require('express-handlebars');
var path=require('path');
var port=3000;
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/project');
var db=mongoose.connection;
var passport=require('passport');
var localStrategy=require('passport-local');
var flash=require('connect-flash');
var Admin=require('./models/admin');
var index=require('./routes/index');
    var users=require('./routes/users');
    var admin=require('./routes/admin');
var app=express();

var expressSanitizer=require('express-sanitizer');
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');
    app.set('partials',path.join(__dirname + '/views','partials'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));


app.use(require('express-session')({
    secret:"cats",
    resave:false,
    saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());
app.use(expressSanitizer());
    app.use(express.static(path.join(__dirname,'public')));
    app.use('/static', express.static(__dirname + '/public'));
app.use(function(req,res,next){
    res.locals.currentuser=req.user;
//    res.locals.error=req.flash('error');
  //  res.locals.success=req.flash('success');
    next();
});
app.use('/',index);
app.use('/users',users);
app.use('/admin',admin);
/*
app.get('/',function(req,res){
    res.render('index');
});
app.get('/users',function(req,res){
    res.render('userindex');
});
*/

function reroute(req,res,next){
    console.log(currentuser.username);
    console.log(currentuser.role);    
    next();
}

app.listen(port,function(){
    console.log("port started");
    //console.log(currentuser);
});
