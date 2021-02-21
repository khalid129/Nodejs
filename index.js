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
// fs.writeFileSync("one.txt","Is OverwriteOne.js has been created");


// It append the data and not delete the previous data
// fs.appendFileSync("one.txt","\nIt append the data on the file");


// Node js include additional data type called buffer which is not 
// available in JavaScript 
// Buffer is mainly store the binary data 
// While reading from a file or recieving packets over the network
// const buf_data = fs.readFileSync("one.txt");
// console.log(buf_data);

// const buf_data = fs.readFileSync("one.txt");
// It convert binary data to string
// const org_data = buf_data.toString();
// console.log(org_data);

// to rename the file 
// fs.renameSync("one.txt","index.txt");

// Challange Time

// 1️⃣ Create a folder named it
// 2️⃣ Create a file on it bio.txt and write data on it
// 3️⃣ Add more data in bio.txt
// 4️⃣ Read the data without getting the buffer data on first
// 5️⃣ Rename the file to mybio.txt
// 6️⃣ Now delete the both file and folder

var fs = require('fs');

// fs.readFile('index.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// CURD Operation

// fs.mkdirSync('CURD');

fs.writeFileSync("CURD/bio.txt","I am MERN Stack developer");



