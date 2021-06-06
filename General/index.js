// console.log("Node Js Is Runtime time java Script");

// REPL 
// The Node. js Read-Eval-Print-Loop (REPL) is an interactive shell that processes Node. js expressions

// 1️⃣ Js Expression
// 2️⃣ Use Variable
// 3️⃣ Multiline code
// 4️⃣ use (_) to get the last result
// 5️⃣ we can use ditor mode

// const fs = require("fs");

// It delete the current data first then overwrite the file or if
// file not exist to first it create a file the write a data on it
// var fs = require('fs');
// fs.writeFileSync("one.txt","Is Overwrite One.js has been created");

// 📔
// It append the data and not delete the previous data
// fs.appendFileSync("one.txt","\nIt append the data on the file");


// 📔 Node js include additional data type called buffer which is not 
// available in JavaScript 
// Buffer is mainly store the binary data 
// While reading from a file or recieving packets over the network
// var fs = require('fs');
// const buf_data = fs.readFileSync("one.txt");
// console.log(buf_data);

// const buf_data = fs.readFileSync("one.txt");
// It convert binary data to string
// const org_data = buf_data.toString();
// console.log(org_data);

// to rename the file 
// fs.renameSync("one.txt","index.txt");

// Synchronous or Blocking
// Line by line exceution

// Asynchronous or non-blocking
// Line by line execution not guranteed
// Callback will fires 
// when we use Asynchronous we must use Callback function
// 💯 Nodejs work on non-blocking IO model

// const fs = require("fs");
// fs.readFile("one.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log(data);
//     }
// });

// 💯 Serve HTML file with Node Js Server

// const http = require('http');
// const fs = require('fs');
// const fileContent = fs.readFileSync("server.html");

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"});
//     res.end(fileContent);
// });

// server.listen(80,"127.0.0.1",()=>{
//     console.log("The server is lsitening on port 80");
// })



// Challange Time

// 1️⃣ Create a folder named it
// 2️⃣ Create a file on it bio.txt and write data on it
// 3️⃣ Add more data in bio.txt
// 4️⃣ Read the data without getting the buffer data on first
// 5️⃣ Rename the file to mybio.txt
// 6️⃣ Now delete the both file and folder

// let fs = require('fs');

// fs.readFile('index.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// CURD Operation

// fs.mkdirSync('CURD');

// fs.writeFileSync("CURD/bio.txt","I am MERN Stack developer");

//fs.appendFileSync("CURD/bio.txt", "I am also a software Engineer");

// const data = fs.readFileSync("CURD/bio.txt","utf8");
// console.log(data);

// fs.renameSync("CURD/bio.txt","CURD/myBio.txt");

// fs.unlinkSync("CURD/myBio.txt");

// fs.rmdirSync("CURD");

