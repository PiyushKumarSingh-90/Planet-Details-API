import express  from "express";
import detailModel from "../models/detailsModel.js";

//  API Endpoints

const router = express()

router.post("/",(req,res)=>
{
    const details = req.body

    console.log()

    detailModel.create(details)
    .then(()=>
    {
        res.status(201).send({message:"Details Registered"})
    })
    .catch((err)=>
    {
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    })
})

router.get("/:id",(req,res)=>
{
    let id = req.params.id

    detailModel.findById(id)
    .then((data)=>
    {
        res.status(201).send(data)
    })
    .catch((err)=>
    {
        res.status(500).send({message:"Some Poroblem"})
    })

})

router.put("/:id",(req,res)=>
{
    let id = req.params.id
    const details = req.body

    detailModel.findById(id)
    .then((existingDetail)=>
    {
        if (existingDetail!==null) 
        {
            detailModel.findByIdAndUpdate(id,details)
            .then(()=>
            {
                res.status(200).send({message:"Detail Updated"})
            })
            .catch((err)=>
            {
                res.status(500).send({message:"Some problem"})
            })
        }
        else
        {
            res.status(404).send({message:"Details not Found"})
        }
    })
    
})

router.delete("/:id",(req,res)=>
{
    let id = req.params.id

    detailModel.findById(id)
    .then((existingDetail)=>
    {
        if (existingDetail!==null) 
        {
            detailModel.findByIdAndDelete(id)
            .then(()=>
            {
                res.status(200).send({message:"Detail deleted"})
            })
            .catch((err)=>
            {
                res.status(500).send({message:"Some problem"})
            })
        }
        else
        {
            res.status(404).send({message:"Details not Found"})
        }
    })
    
})


export default router