const express=require('express')
const path=require('path');
let app=express();
let port=3000;

app.use(express.static(path.join(__dirname,'../frontend')));
app.get('/',(req,res)=>{
    res.sendFile(express.static(path.join(__dirname,'../frontend','index.html')));
})
app.listen(port,()=>
{
    console.log(`The server is on${port}`)
})