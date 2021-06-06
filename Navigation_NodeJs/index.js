const fs = require("fs");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("home.html");
const about = fs.readFileSync("about.html");
const service = fs.readFileSync("service.html");
const contact = fs.readFileSync("contact.html");


const server = http.createServer((req,res)=>{
    var url = req.url;
    const data = fs.readFileSync(`${__dirname}/UserApi/userApi.json`, "utf-8")
        const objData = JSON.stringify(data);
    res.setHeader("content-type","text/html");
    if(url=="/"){
        res.setHeader("content-type","application/json");
        console.log(data);
        res.end(objData[0].name);
    }
    else if(url=="/about"){
        res.end(about);
    }
    else if(url=="/service"){
        res.end(service);
    }
    else if(url=="/contact"){
        res.end(contact);
    }
    else{
        var statuscode =  res.statusCode = 404;
        res.writeHead(statuscode ,"content-type","text/html");
        res.end(`<h1>${statuscode} page not found</h1>`);
    }
})

server.listen(port,hostname,()=>{
    console.log(`You server listen at http://${hostname}:${port}/`);
});