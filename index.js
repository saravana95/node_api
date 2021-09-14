const express = require('express')


const app = express();


app.get('/',function () {
    console.log('GET request');
});



app.listen(process.env.port || 4000,function () {
    console.log('now listen app request')
});