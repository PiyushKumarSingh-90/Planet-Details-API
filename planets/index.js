import express from 'express'
import connectDB from './DBcollection.js'
import detailsRouter from './controllers/detailController.js'

connectDB()

const app = express()
app.use(express.json())

app.use("/details",detailsRouter)

app.listen(8000,()=>
{
    console.log("surver up and running")
})