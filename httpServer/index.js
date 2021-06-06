const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain")
    res.end("Hello World I am http server");
});

server.listen(port, hostname, ()=>{
    console.log(`Server is listen at http://${hostname}:${port}/`);
})
