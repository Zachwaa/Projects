require('dotenv').config()
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const sessions = require("express-session")

const logIn = require("./routes/login")
const logout = require("./routes/logout")
const bodyParser = require("body-parser");
const app = express();
const create = require("./routes/createNewAccount")
//const path = require("path")
app.set("trust proxy",1)
app.use(sessions({    // Creates a session with unique ID to be checked when user returns
  secret: process.env.SECRET_KEY,
  saveUninitialized:true,
  cookie: { 
      maxAge: parseInt(process.env.SESSION_MAX_AGE),
      httpOnly:true,
      path:"/",
      secure:false,
      sameSite:'lax'
    },
    
  resave: false,

  user: "",
  admin:false
  
})); 

/*
app.use(express.static(path.resolve(__dirname, '../client/build')));  //ONLY USE FOR PRODUCTION
app.get("/",(req,res) => {
  res.sendFile(path.join(__dirname, '/../react_dist', 'index.html'));
})
app.use((req,res,next) => {
  console.log(req.session)
  next()
})
*/

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

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on ${process.env.PORT}`)
})