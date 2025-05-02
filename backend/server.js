const app=require('./app');
const express=require('express')
const path=require('path');
let port=process.env.PORT||3000;
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'../frontend')));
app.listen(port,()=>
{
    console.log(`The server is on${port}`)
})