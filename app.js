var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require("mongoose");
var session = require("express-session");
//var passport = require("passport");
//var flash = require("connect-flash");
var validator = require("express-validator");
var history = require("connect-history-api-fallback");
//require("./config/passport");

var userRoutes = require('./routes/user');

var webSetting = require('./routes/setting');
var connectRoutes = require('./routes/connect-4Slash');
var userMetaRoutes = require('./routes/login-user-meta');
var getCompanies = require('./routes/get_companies');
var webRoutes = require('./routes/web');
//var apiRoutes = require('./routes/api');
var bcrypt = require('bcrypt-nodejs');

var app = express();





//AZEEM ULLAH's CODE
var flash    = require('connect-flash');
var crypto   = require('crypto');
//var csrf = require('csurf');
/* Login script */

var sess  = require('express-session');
var Store = require('express-session').Store;
var BetterMemoryStore = require('./config/memory');
var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

app.use(sess({
    name: 'JSESSION',
    secret: 'MYSECRETISVERYSECRET',
    store:  store,
    resave: true,
    saveUninitialized: true,
    maxAge: 200000000
}));
//ENDS HERE








// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(validator());
app.use(cookieParser());
app.use(session({secret: "This is Sprout Secret!", resave: false, saveUninitialized: false}));
app.use(flash());
//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

/*app.use(function(req, res, next){
    res.locals.login = req.isAuthenticated();
    if(req.isAuthenticated()){
        res.locals.full_name = req.user.full_name;
    }
    next();
});*/



//AZEEMS CODE STARTS HERE
app.use(validator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.'), root = namespace.shift(), formParam = root;
        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));
app.use(flash());

/*
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "46.101.37.156",
    user: "sprout",
    password: "sprout12345",
    database: "sprout"
});

connection.connect(function (err) {
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});*/


var connection = require('./routes/db_conn');



/*
passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true //passback entire req to call back
    } , function (req, username, password, done){
        console.log(username+' = '+ password);
        console.log(req.query.database);
        if(!username || !password ) { return done(null, false, req.flash('message','All fields are required.')); }
        var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
        connection.query("select * from user where email = ?", [username], function(err, rows){
            console.log(rows);
            if (err) return done(req.flash('message',err));

            if(!rows.length){ return done(null, false, req.flash('message','Invalid username or password.')); }
            //console.log("a" + rows[0].email);
            salt = salt+''+password;
            //var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
            //var dbPassword  = rows[0].password;
            //console.log("a" + dbPassword);
            if(!bcrypt.compareSync(password, rows[0].password)){
                return done(null, false, req.flash('message','Invalid username or password.'));
            }

            return done(null, rows[0]);
        });
    }
));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    connection.query("select * from user where id = "+ id, function (err, rows){
        done(err, rows[0]);
    });
});
*/
/*
app.get('/signin', function(req, res){
    res.render('login/index',{'message' :req.flash('message')});
});*/
/*
app.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        switch (req.accepts('html', 'json')) {
            case 'html':
                if (err) { return next(err); }
                if (!user) { return res.redirect('/signin'); }
                req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    return res.redirect('/Setting');
                });
                break;
            case 'json':
                if (err)  { return next(err); }
                if (!user) { return res.status(401).send({"ok": false}); }
                req.logIn(user, function(err) {
                    if (err) { return res.status(401).send({"ok": false}); }
                    return res.send({"ok": true});
                });
                break;
            default:
                res.status(406).send();
        }
    })(req, res, next);
});
*/
/*
app.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        if(error) {
            return res.status(500).json("an error occured");
        }
        if(!user) {
            console.log(req);
            return res.status(401).json("Crediantials Invalid");
        }
        res.status(200).json("ok");
    })(req, res, next);
});*/
/*
app.post("/signin", passport.authenticate('local', {
    successRedirect: '/Setting',
    failureRedirect: '/signin',
    failureFlash: true
}), function(req, res, info){
    res.render('login/index',{'message' :req.flash('message')});
});
*/
/*
app.get('/logout', function(req, res){
    req.session.destroy();
    req.logout();
    res.redirect('/signin');
});
*/

//ENDS HERE




app.use('/user', userRoutes);
app.use('/Setting', webSetting);
app.use('/connect-4slash', connectRoutes);
app.use('/login-user-meta', userMetaRoutes);
app.use('/get-companies', getCompanies);
app.use('/', webRoutes);

app.use(history({
    rewrites: [
        { from: /\/sales/, to: '/sales'},
        { from: /\/attendance/, to: '/attendance'},
        { from: /\/purchase/, to: '/purchase'},
        { from: /\/employees/, to: '/employees'},
        { from: /\/accounting/, to: '/accounting'},
        { from: /\/calendar/, to: '/calendar'},
        { from: /\/timesheet/, to: '/timesheet'},
        { from: /\/notes/, to: '/notes'},
        { from: /\/pointofsale/, to: '/pointofsale'},
        { from: /\/repairs/, to: '/repairs'},
        { from: /\/manufacturing/, to: '/manufacturing'},
        { from: /\/inventory/, to: '/inventory'},
        { from: /\/expenses/, to: '/expenses'},
        { from: /\/maintenance/, to: '/maintenance'},
        { from: /\/recruitment/, to: '/recruitment'},
        { from: /\/signup/, to: '/signup'},
        { from: /\/discuess/, to: '/discuess'},
        { from: /\/dashboards/, to: '/dashboards'},
        { from: /\/leaves/, to: '/leaves'},
        { from: /\/test/, to: '/test'},
        { from: /\/projects/, to: '/projects'},
        { from: /\/setting/, to: '/Setting'},
        { from: /\/forgot_password/, to: '/forgot_password'},
        { from: /\/email_temp/, to: '/email_temp'},
        { from: /\/password/, to: '/password'},
        { from: /\/clear/, to: '/clear'},
        //{ from: /\/dashboard/, to: '/dashboard'},
    ]
}));


//app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
