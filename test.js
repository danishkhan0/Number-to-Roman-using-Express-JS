const express = require('express');
 const app = express();

 app.get('/getdata', (req, res)=>{
     const data  ={
         number : 5,
         Roman : "V"
     }

     res.send(data);
 });

 app.listen(3000, ()=>{
     console.log('iistening on port 3000')});
