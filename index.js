require('dotenv').config()
const express = require('express')
const mongoose = require ('mongoose')
//const studentRouter = require ('./routes/student-router')

const genderRouter = require ('./routes/gender_router')
const userRouter = require('./routes/user_router')
const categoryRouter = require('./routes/category_router')
const hardwareRouter = require('./routes/hardware_router')
const auth = require('./middleware/auth')
const app = express()

//Connect to MobgoDB
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/studentdb')
    .then(()=>{
        console.log('connected to MongoDB database')
    }).catch((err) => console.log(err))


// 1. Application level middleware
app.use('/',(req, res, next) =>{
    console.log(`${req.method} ${req.path}`)
    next()
})

app.use(express.json())

//Router level middleware
//app.use('/student',studentRouter)

app.use('/genders',genderRouter)
app.use('/users',userRouter)
app.use(auth.verifyUser)
app.use('/hardwares', hardwareRouter)
app.use('/category', categoryRouter)

//Error handling

app.use((err,req,res,next) => {
console.log(err.stack);
if (res.statusCode == 200) res.status(500)
res.json({"err": err.message})
})

app.listen(3000, () => {
console.log('App is running on port 3000')
})