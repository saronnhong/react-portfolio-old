var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
const path = require('path');

app.use(express.static("public"));

const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'Micaiah20x6@gmail.com',
    to: 'saronnhong@gmail.com',
    subject: 'testing',
    text: 'it works'
};
app.get("/send-email", function(req, res) {
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("error occurs ", err);
        } else {
            console.log("email sent!");
        }
    });
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
