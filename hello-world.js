/*//task1
console.log('hello world')

//task2
var http=require("http")
//now we need to create server

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'html'});
    response.end('<h1>Hello node</h1>\n');
 }).listen(3000);
 
console.log('server running at http://127.0.0.1:3000/');*/
//task3

const { generateKey } = require('crypto');
var fs=require('fs')
fs.writeFile('welcome.txt','hello node',function (error){
    if (error){
        console.error("there is an error")
    }
    console.log('success')

});



    
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error ', err);
        return;
    }
    console.log('File content:', data);
});

console.log("heyyyyyyy")
//task 4


var generator =require('generate-password')
var pass=generator.generate({
    length: 10,
	numbers: true
})
fs.writeFile("pass.txt",`generated password:${pass}\n`,(error) => {
    if (error){
        console.log("error",error)
    }
    
})



const nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aminakouni14@gmail.com',
        pass: 'ljtj hexz czfv cnra'

    }
});

var mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'aminakouni14@gmail.com',
    subject: 'heey very important',
    text: 'hello amina'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
