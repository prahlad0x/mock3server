const express = require('express')
const jwt = require('jsonwebtoken')
const { Flight, flightSchema } = require('../models/flight.model')


const flightRouter = express.Router()


flightRouter.get("/", async (req, res)=>{
    try {
        const flights = await Flight.find()
        return res.status(200).send({msg: "All Flights data",isOk : true, FlightData : flights})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something Went Wrong",isOk : false, error : error})
    }
})


flightRouter.get("/:flightId", async (req, res)=>{
    try {
        let flightId = req.params.flightId
        const flights = await Flight.findById(flightId)
        return res.status(200).send({msg: "Flight data",isOk : true, FlightData : flights})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something Went Wrong",isOk : false, error : error})
    }
})


flightRouter.post('/', async (req, res)=>{
    try {
        let flight = new Flight(req.body)
        await flight.save()
        return  res.status(201).send({msg : "Flight Created Successfully", isOk : true, flight : flight})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something Went Wrong",isOk : false, error : error})
    }
} )


flightRouter.put('/:id', async(req, res)=>{
    try {
        let id = req.params.id
        if(!id )  return res.status(400).send({msg: "Please Provide an Id ",isOk : false, })

        await Flight.findByIdAndUpdate(id, req.body)

        let updated =await Flight.findById(id)
        return res.status(204).send({msg: "Flighth Updated Successfully", isOk :  true, updatedFlight: updated })
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something Went Wrong",isOk : false, error : error})
    }
})

flightRouter.patch('/:id', async(req, res)=>{
    try {
        let id = req.params.id
        if(!id )  return res.status(400).send({msg: "Please Provide an Id ",isOk : false, })

        await Flight.findByIdAndUpdate(id, req.body)

        let updated =await Flight.findById(id)

        return res.status(204).send({msg: "Flighth Updated Successfully", isOk :  true, updatedFlight: updated })

    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something Went Wrong",isOk : false, error : error})
    }
})


flightRouter.delete('/:id', async(req,res)=>{
    try {
        let id = req.params.id
        if(!id )  return res.status(400).send({msg: "Please Provide an Id ",isOk : false, })

        let deleted = await Flight.findByIdAndDelete(id)
        return res.status(202).send({msg: "Flighth Deleted Successfully", isOk :  true, deletedFlight: deleted })
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something Went Wrong!",isOk : false, error : error})
    }
})


module.exports = {flightRouter}