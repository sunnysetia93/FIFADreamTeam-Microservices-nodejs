const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000,()=>{
    console.log('running query-service on port 3000');
})