const mongoose = require('mongoose')
const { userSchema } = require('./user.model')
const { flightSchema } = require('./flight.model')

const bookingSchema = new mongoose.Schema({
    user: {type : userSchema, required : true},
    flight : {type : flightSchema, required : true}
})


const Booking = mongoose.model('booking', bookingSchema)

module.exports = {Booking}
