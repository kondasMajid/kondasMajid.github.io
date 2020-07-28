const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2"); // Gmail smtp
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const details = require("./details.json");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to Email Api <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<example.gmail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Wellcome to Fun Of Heuristic 👻", // Subject line
    html: `<h1>Hi ${user.name}</h1><br>
    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}


// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// app.use(bodyParser.json());
// // app.use(bodyParser.json({limit: "50mb"})); //commented already
// // app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000})); //commented already

// app.post('/sendFormData', (req, res) => {
//   console.log(req.body, 'data of form');
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     secure: 'true',
//     port: '465',
//     auth: {
//       user: 'your.company.mail@gmail.com', // must be Gmail
//       pass: 'password'
//     }
//   });

//   var mailOptions = {
//     from: 'your.company.mail@gmail.com',
//     to: 'your.mail@gmail.com', // must be Gmail
//     cc:`${req.body.name} <${req.body.email}>`,
//     subject: 'Sending Email using Node.js',
//     html: `
//             <table style="width: 100%; border: none">
//               <thead>
//                 <tr style="background-color: #000; color: #fff;">
//                   <th style="padding: 10px 0">Name</th>
//                   <th style="padding: 10px 0">E-mail</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th style="text-align: center">${req.body.name}</th>
//                   <td style="text-align: center">${req.body.email}</td>
//                 </tr>
//               </tbody>
//             </table>
//           `
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).json({
//         message: 'successfuly sent!'
//       })
//     }
//   });

// });

// app.listen(3000, () => {
//   console.log("server run!!!");
// });
