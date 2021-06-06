const fs = require("fs");
const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer();

server.on("request",(req,res)=>{

// First Way
//     fs.readFile("input.txt",(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         res.end(data.toString())
//     })


// Second Way
// const stream = fs.createReadStream("input.txts");

// stream.on("data",(chunkdata)=>{
//     res.write(chunkdata)
// })
// stream.on("end",()=>{
//     res.end();
// })
// stream.on("error",(err)=>{
//     console.log(err);
//     res.end("File not exist");
// })

// 3rd way
// const stream = fs.createReadStream("input.txt");
// stream.pipe(res);

// });

// server.listen(port, hostname, ()=>{
//     console.log(`Server is listen at http://${hostname}:${port}/`);
// })
