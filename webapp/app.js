const express  = require('express');
//const logger = require( 'morgan');
const cookieParser = require( 'cookie-parser');
const bodyParser = require( 'body-parser');
const session = require( 'express-session');
const path = require( 'path');

const app = express();



/*
setup
*/
app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');

/*
middle ware
*/
const sc = '123dwwef@#!ss';//secret
app.use(session({secret: sc, cookie: { maxAge: 3600000}}));
//app.use(expressLayout);
//app.use(logger('dev'));

app.use(cookieParser(sc));//()하나 안해서 프로그램 안돌아갔음
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'resources')));


const route = {
	signup: require('./controller/signup.js'),
	login_check: require('./controller/login_check.js'),
  login: require('./controller/login.js'),
	main: require('./controller/main.js')
};       
//app.use(route.login_check);
app.use('/signup', route.signup);
app.use('/login', route.login);
app.use('/', route.main);

//error handling
app.use(function(err, req, res, next){

    console.log(err.message);
});

const port = 3000;
app.listen(port, function(){
    console.log('listening.. port: ',port);
});
