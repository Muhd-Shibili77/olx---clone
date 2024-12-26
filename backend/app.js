const express = require('express')
const app=express()
const mongoose = require('mongoose')
const session = require('express-session')
const nocache = require ('nocache')
const cors = require('cors');
const connectDB = require('./config/DB.js')
const userrouter = require('./router/userrouter.js')
const productrouter = require('./router/productrouter.js')
const path = require('path')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:process.env.SESSION_SECRET || 'secert',
    resave:false,
    saveUninitialized:true
}))

connectDB()
app.use(nocache())
app.use(cors()); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/user',userrouter)
app.use('/product',productrouter)
const port=3000
app.listen(port,()=>{
    console.log(`server is started at http://localhost:${port}`)
})