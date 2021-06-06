const fs = require("fs");

// Making folder by an async method
// fs.mkdir("ACURD",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log("Folder created successfuly");
//     }
// });

// Create a file using Async method
// fs.writeFile("ACURD/bio.txt","I am FullStack Web developer",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log("File created successfuly");
//     }
// });

// Append a data in a file using async method
// fs.appendFile("ACURD/bio.txt", " I am also a Software Engineer", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File updated successfuly");
//   }
// });

// Reading file using Ayns method
fs.readFile("ACURD.bio.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    else{
        console.log(data);
    }
})

// Rename a file using an Async method
// fs.rename("ACURD/bio.txt", "ACURD/myBio.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File renamed successfuly");
//   }
// });

// Deleting a file using an Async method;
// fs.unlink("ACURD/myBio.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File deleted successfuly");
//   }
// });

//Deleting a folder using an Async method;
// fs.rmdir("ACURD",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log("Folder deleted successfuly");
//     }
// }) 