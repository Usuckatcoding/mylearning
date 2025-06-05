const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection({
host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,                // default SkySQL secure port
  ssl: { rejectUnauthorized: true }  // very important for SkySQL SSL
});
connection.connect((err) => {
  if (err) {
    console.error('❌ SkySQL connection failed:', err.message);
  } else {
    console.log('✅ Connected to SkySQL successfully!');
  }
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    res.render('login')
})
app.post('/signup', (req, res) => {
    res.render('signup');
})
app.post('/home', (req, res) => {
    let signup = req.body.submitted;
    if (signup === 'Submit') {
        const username1 = req.body.username;
        const email = req.body.Email;
        const password = req.body.password;
        const checkpass = req.body.checkpassword;
        let userid = 1;
        let users = [[userid, username1, email, password]];
        connection.query('insert into users values ?', [users], (err, result) => {
            if (err) throw err
            console.log(result);
            if (!err) {
                res.render('home');
            }
        })
    }
    else {
        const email = req.body.Email;
        const password = req.body.password;
        const sql=`select email,pasword from users where email='${email}'`
        connection.query(sql,(err,result)=>{
            if(err) throw err
            console.log(result);
            if(!result[0]){
                // alert("There is no account");
                console.log('There is no account');
                res.redirect('/login');
            }
            else if(!result[0].email){
                // alert('password or email is wrong');
                console.log('user does not exist');
                res.redirect('/login');
            }
            else if(result[0].pasword!= password){
                console.log('password is wrong');
                res.redirect('/login');
            }
            else if(result[0].email===email && result[0].pasword===password){
                res.render('home');
            }
        })
    }

})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})
// module.exports = pool.promise();
module.exports = app;