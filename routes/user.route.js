const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
const { User } = require('../models/user.model')

const userRouter = express.Router()

userRouter.post("/register", async(req, res)=>{

    try {
        let user = await User.findOne({email : req.body.email})
        if(user){
            return res.status(400).send({msg : "User Already Registered, Please Login!", isOk :false})
        }
        else{
            let hash = bcrypt.hashSync(req.body.password, 7)
            if(hash){
                let newUser = new User({...req.body, password : hash})
                await newUser.save()
                return res.status(201).send({msg :"User Registered Successfully", isOk : true, user : newUser})
            }
            else{
                return res.status(400).send({msg : "Something Went wrong", isOk :false})
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg : "Something Went wrong", isOk :false, error : error})
    }
})


userRouter.post('/login', async (req, res)=>{
    let {email, password} = req.body
    try {
        let user = await User.findOne({email : email})
        if(!user) return res.status(400).send({msg : "User does not exists", isOk : false})
        else{
           let ispasswordCorrect =  bcrypt.compareSync(password, user.password)
           if(!ispasswordCorrect) return res.status(400).send({msg : "Wrong Credientials", isOk : false})
           else{
                const token = jwt.sign({email : user.email}, process.env.tokenKey, {expiresIn : '1d'})
                const refreshToken = jwt.sign ({email : email}, process.env.refreshTokenKey, {expiresIn : "7d"})

                return res.status(201).send({msg :"Login Successfull", token : token, refreshToken : refreshToken, isOk: true})
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg : "Something Went Wrong", isOk : false, error : error})
    }
})

userRouter.get("/", async(req,res)=>{
    try {
        let allusers = await User.find()
        res.send({msg : "all users", users : allusers})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg : "Something Went Wrong", isOk : false, error : error})
    }
})


module.exports = {userRouter}