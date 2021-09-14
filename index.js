const express = require('express')


const app = express;



app.get('/api',function (req,res) {
    console.log('GET Request');
    res.send({name:"saravanan"});
});




app.listen(process.env.port || 4000,function () {
    console.log('listen request ');
});