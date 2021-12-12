const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
// const nodemailer = require('nodemailer');
// const multiparty = require('multiparty');

// require('dotenv').config();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'/public')));

const home = fs.readFileSync('1.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const network = fs.readFileSync('./network.html');
const infrastructure = fs.readFileSync('./infrastructure.html');
const product = fs.readFileSync('./product.html');


app.get('/',function (req, res) {
    res.end(home);
    console.log('index page');
})

app.get('/about.html',function (req, res) {
    res.end(about);
    console.log('about page');
})

app.get('/contact.html',function (req, res) {
    res.end(contact);
    console.log('contact page');
})

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp",
//     port: 587,
//     secure: false,
//     auth: {
//         user: "manavshah0407@gmail.com",
//         pass: "ManavShah47*",
//     },
// });

// // verify connection configuration
// transporter.verify(function (error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Server is ready to take our messages");
//     }
// });

// app.post("/send", /cors(),/ (req, res) => {
//     let form = new multiparty.Form();
//     let data = {};
//     form.parse(req, function (err, fields) {
//       console.log(fields);
//       Object.keys(fields).forEach(function (property) {
//         data[property] = fields[property].toString();
//       });
//       console.log(data);
//       var maillist = ["chormanav47@gmail.com"]
//       const mail = {
//         from: "manavshah0407@gmail.com",
//         to: maillist, // receiver email,
//         subject: "MAIL FROM ASHISH CORPORATION CONTACT US PAGE",
//         text: `NAME: ${data.name} \n MAIL ID: <${data.email}> \n PHONE: ${data.phone} \n MESSAGE: ${data.message}`,
//       };
//       transporter.sendMail(mail, (err) => {
//         if (err) {
//           console.log(err);
//           res.status(500).send("Something went wrong.");
//         } else {
//           res.status(200).send("Your response has been submitted...");
//         }
//       });
//     });
//   });


app.get('/network.html',function (req, res) {
    res.end(network);
    console.log('blog page');
})

app.get('/infrastructure.html',function (req, res) {
    res.end(infrastructure);
    console.log('beast adamant page');
})

app.get('/product.html',function (req, res) {
    res.end(product);
    console.log('beast adamant page');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});