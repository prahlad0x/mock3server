const express = require('express')
const { Booking } = require('../models/booking.model')
const { User } = require('../models/user.model')
const { Flight } = require('../models/flight.model')

const bookingRouter = express.Router()

bookingRouter.get('/dashboard', async(req, res)=>{
    try {
        let allBookings= await Booking.find()
        return res.status(200).send({msg : "All Booking ", isOk : true, allBookings : allBookings})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something went wrong !", isOk : false, error : error})
    }
})


bookingRouter.post('/dashboard',async (req, res)=>{
    try {
        let {userId, flightId} = req.body
        let user= await User.findById(userId)
        let flight = await Flight.findById(flightId)

        let newBooking = new Booking({user, flight})
        await newBooking.save()

        return res.status(201).send({msg: "Booking SuccessFull", isOk : true, booking : newBooking})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something went wrong !", isOk : false, error : error})
    }
})



bookingRouter.delete('/dashboard/:id', async(req,res)=>{
    try {
        let id = req.params.id
        let deletedBooking = await Booking.findByIdAndDelete(id)
        return res.status(202).send({msg : "Booking deleted Successfully", isOk : true, deletedBooking : deletedBooking})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something went wrong !", isOk : false, error : error})
    }
})


bookingRouter.patch('/dashboard/:id', async(req,res)=>{
    try {
        let{user, flight} = req.body
        let id = req.params.id
        await Booking.findByIdAndUpdate(id, {user, flight})
        let updated = await Booking.findById(id)
        return res.status(204).send({msg : "Booking updated Successfully", isOk : true, updatedBooking: updated})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg: "Something went wrong !", isOk : false, error : error})
    }
})

module.exports = {bookingRouter}


