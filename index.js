const express = require('express');
const app = express();
const port = 8000;

const db = require('mongoose');

app.use(express.json());


// use express router
app.use('/',require('./routes'));

// set up the view engine
app.use('view engine','ejs')
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`)
    }
    console.log(`Server up and running at port: http://127.0.0.1:${port}`);
})