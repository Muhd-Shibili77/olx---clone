const mongoose = require("mongoose"); 
const sentEmail = require('../utilities/sendMail')
const User = require('../model/userModal')

const generateOTP =()=>Math.floor(100000 + Math.random() * 900000).toString();


const login = async (req,res)=>{
    console.log('testing')
    const {email} = req.body

    if(!email){
        return res.status(400).json({message:'Email is required'})
    }

    try{
        const otp = generateOTP()
        const otpExpires = new Date(Date.now()+10* 60 * 1000)
        let user = await User.findOne({email})

        if(user){
            user.otp = otp
            user.otpExpires = otpExpires
        }else{
            user = new User({
                email,
                otp,
                otpExpires,
            });
        }
        await user.save()

        const subject = 'OTP code'
        const text = `Your OTP code is ${otp}.It will expires within 10 min`
        await sentEmail(email,subject,text)    
        console.log(`your otp is ${otp}`)
        res.status(200).json({message:'OTP sent successfully'})

    }catch(error){
        console.error('Error generating otp:',error)
        res.status(500).json({message:'Internal server error'})
    }
}

const verifyOtp = async (req,res)=>{
    const {email,otp}=req.body
    if(!email || !otp){
        return res.status(400).json({message:'Email and otp are required'})
    }

    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:'User not found'})
        } 
        if(user.otp !== otp ){
            return res.status(400).json({message:'incorrect OTP'})
        }
        if(user.otpExpires < new Date()){
            return res.status(400).json({message:'OTP is expired'})
        }
        user.isVerified = true
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        res.json({message :'User verified successfully'})

    }catch(error){
        console.error('Error verfiying OTP:',error)
        res.status(500).json({message:'Internal server error'})
    }
}

module.exports = {
    login,
    verifyOtp
}