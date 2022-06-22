const express = require('express');
const app = express();
const port = 8000;

const db = require('mongoose');

app.use(express.json());


// use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`)
    }
    console.log(`Server up and running at port: http://127.0.0.1:${port}`);
})