const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const cors = require('cors');
const passport = require('./auth/passport');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser('my super secret'));
app.use(expressSession({
    secret:'my super secret',
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());  
app.use(passport.session());    //give this line whereever you wish to maintain sessions for. Right now it is global.

app.use('/api',require('./routes/api'));    //api routes
app.use('/',require('./routes/index'));     //login,logout,signup,token

app.listen(3000,()=>{
    console.log('running query-service on port 3000');
})