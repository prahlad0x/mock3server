# mock3server

# These is a backend url of a flight booking system.

# Url - https://mockserver-64rp.onrender.com

For Better Understanding Of All The Endpoints Of This Url You Can Refer To The Vedio Link Given Below:
        

It have following routes :

1:. https://mockserver-64rp.onrender.com/user/login : (POST)
        this end point will take email and password of the registered user and if the provided details are correct then user will get token and refreseh token.
    
2:. https://mockserver-64rp.onrender.com/user/register : (POST)
        this end point will take name, email and password of the user and register him in the database.
   UserSchema = { name : String, email :String, password: String, _id : uniqueId}
    
   
4:.  https://mockserver-64rp.onrender.com/user : (GET)
        this end point will return all user which are currently in database.
    
    
5:.  https://mockserver-64rp.onrender.com/flights : (GET)
        this end point will return all the flights available or all the flights in database.

    
6:.  https://mockserver-64rp.onrender.com/flights/:flightId : (GET)
        this end point will return a specific flights of Id (given in parameters).

7:.  https://mockserver-64rp.onrender.com/flights/ : (POST)
        this end point will allow user to add a new flight to the system.
         FlightSchema : {
                          _id: ObjectId,
                          airline: String,
                          flightNo: String,
                          departure: String,
                          arrival: String,
                          departureTime: Date,
                          arrivalTime: Date,
                          seats: Number,
                          price: Number
                        }
   
8:.  https://mockserver-64rp.onrender.com/flights/:flightID : (PATCH)
        this end point will allow user to update details of any flight in system by its id. Pass the FlightID in parameters and all the details of flight which user want to update in req.body.

    
9:.  https://mockserver-64rp.onrender.com/flights/:flightID : (PUT)
        this end point will allow user to update details of any flight in system by its id. Pass the FlightID in parameters and all the details of flight which user want to update in req.body.

10:.  https://mockserver-64rp.onrender.com/flights/:flightID : (DELETE)
        this end point will allow user to Delete any flight in system by its id. Pass the FlightID in parameters and on successful response that particular flight will be removed from system.
     

11:.  https://mockserver-64rp.onrender.com/booking/dashboard : (GET)
        this end point will give all the booking in the system.
             booking schema = {_id : uniqueId, user: {details of user who booked}, flight : {details of flight which was booked}
     
12:.  https://mockserver-64rp.onrender.com/booking/ : (POST)
        this end point will add a new booking in system data by taking userID and flightID in req.body.
     

13:.  https://mockserver-64rp.onrender.com/booking/dashboard/:bookingID : (PUT/PATCH)
        this end point update all the booking details  in system passed in req.body form the booking with id(passed in parameters) .
     

14:.  https://mockserver-64rp.onrender.com/booking/dashboard/:bookingID : (DELETE)
        this end point Delete the booking  with id (passed in parameters) from the system.






    

   
   


