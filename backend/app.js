const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
let port=3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json());
    app.post('/register',(req,res)=>{
        const action=req.body.action;
        console.log(action);
        if(action==='Signup')
        {
            res.render('signup');
        }
        else{
            res.render('login');
        }
       
    })
app.get('/register/login',(req,res)=>{
    res.render('login')
})
app.get('/register/signup',(req,res)=>{
    res.render('signup');
})
app.post('/register/signup',(req,res)=>{
    const home=req.body.registered;
    console.log(home);
    if(home==='Create-account'){
        res.render('home')
    }
})
module.exports=app;