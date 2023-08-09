require('dotenv').config()

const express = require("express");
const app = express();

const cookieParser = require("cookie-parser")
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session")

const logIn = require("./routes/login")
const logout = require("./routes/logout")
const create = require("./routes/createNewAccount")
const retrieve = require("./routes/searchProducts")

const {  v1: uuidv1,} = require('uuid');
const mysql = require('mysql');
const MySQLStore = require('express-mysql-session')(session);

const options = {
  host:process.env.HOST,
  user:process.env.USER,
  password:process.env.PASSWORD,
  database:process.env.DATABASE,
}

var sessionConnection = mysql.createConnection(options)
const sessionStore = new MySQLStore({
  expiration: 10800000,
  createDatabaseTable: true,
  clearExpired: false,
  
  schema: {
    tableName: 'sessions',
    columnNames: {
        session_id: 'session_id',
        expires: 'expires',
        data: 'data'

    }
  }
},sessionConnection)


app.set("trust proxy",1)
app.use(session({   
  secret: process.env.SECRET_KEY,
  saveUninitialized:false,
  store: sessionStore,
  resave: false,

  cookie: { 
      httpOnly:true,
      maxAge: parseInt(process.env.SESSION_MAX_AGE),
      id: uuidv1(),
      path:"/",
      secure:false,
      sameSite:true
    },
  
})); 

app.use(
  cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(cookieParser())
app.use(express.json({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', logIn)
app.use('/', create)
app.use('/', logout)
app.use('/',retrieve)
app.post('/api',function(req,res,next){
    if (req.session.admin == undefined){
      req.session.admin = false
      res.send(req.session)
    } else {
      res.send("SESSION ALREADY EXISTS")
    }
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on ${process.env.PORT}`)
})