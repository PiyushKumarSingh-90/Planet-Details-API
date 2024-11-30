import mongoose from 'mongoose'

//connectinf to DB

export default function connectDB()
{
    mongoose.connect("mongodb://localhost:27017/planet")
    .then(()=>
    {
        console.log("Database Connected")
    })
    .catch((err)=>
    {
        console.log(err)
    })
}