const nodemailer = require('nodemailer')
require('dotenv').config();

const sentEmail = async (to,subject,text)=>{
    try{
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL,
                pass:process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false, // Allow self-signed certificates (not recommended for production)
              },
        });

        const mailOptions ={
            from:process.env.EMAIL,
            to,
            subject,
            text,
        };
        await transporter.sendMail(mailOptions)
        console.log('Email sent successfully')
    }catch(error){
        console.error('Error sending email: ',error)
    }
}
module.exports =sentEmail;