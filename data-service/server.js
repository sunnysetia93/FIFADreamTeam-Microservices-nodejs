const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/data-api',require('./routes/api'));    //api routes

app.listen(3500,()=>{
    console.log('running data-service on port 3500');
})