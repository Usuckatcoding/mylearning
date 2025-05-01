const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
let port=3000;
app.get('/',(req,res)=>{
    res.render('login');
    res.render('signup');
})
app.listen(port,()=>{console.log(`the port is on ${port}`)});