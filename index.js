import express from 'express'
import mongoConnection from './db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/authRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())
mongoConnection()
app.use(cors())

const PORT = process.env.PORT

// test api(optional)
app.get("/test",(req,res)=>{
     res.send("hello world")
})

app.use('/auth',userRouter)

app.listen(PORT,()=>{
    console.log("express started"+PORT)
})

