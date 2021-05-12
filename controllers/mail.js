"use strict";
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const {USER,PASS} = process.env;
async function sendMail(req,res) {
    const {email,name,tell,message} = req.body;
              const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: USER,
                  pass: PASS 
                }
              });
              const mailOptions = {
                from: USER,
                to: userEmail,
                subject: 'New Message from Self.az',
                text: `${message} by ${name} 
                email: ${email}
                tell: ${tell}`,
              };
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
             res.redirect('/contact');
}
module.exports = sendMail;
