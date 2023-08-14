const express = require("express")
const cors = require('cors')
require('dotenv').config()
const { connection } = require("./db")
const { userRouter } = require("./routes/user.route")
const { flightRouter } = require("./routes/flight.route")
const { bookingRouter } = require("./routes/booking.route")


const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res)=>{
    return res.status(200).send({
        msg: "Welcome to Fligth Booking System"
    })
})

app.use("/user", userRouter)

app.use("/flights", flightRouter)

app.use('/booking', bookingRouter)

app.listen(process.env.port, async ()=>{
    try {
        await connection;
        console.log('Connected to DataBase')
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})