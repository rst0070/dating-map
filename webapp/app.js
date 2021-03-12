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

const db = require('./model/db.js');
db.connect(()=>{
    app.use('/', require('./controller/main/travle_list.js'));
    app.use('/travle', require('./controller/main/travle.js'));

    app.use('/login', require('./controller/login/login.js'));
    app.use('/signup', require('./controller/login/signup.js'));


    //error handling
    app.use(function(err, req, res, next){

        console.log(err.message);
    });

    const port = 3000;
    app.listen(port, function(){
        console.log('listening.. port: ',port);
    });
})

