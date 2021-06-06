const fs = require("fs");
const bioData = {
  name: "flutter",
  age: 20,
  version: 2.4,
};
// console.log(bioData.name);
// Convert Object into JSON data
// We can not call JSON data like an Object

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
fs.writeFile("json1.json", jsonData, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Created successfuly");
  }
});

fs.readFile("json1.json", "utf-8", (err,data) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(data);
    // Convert JSON data into an Object
    const objData = JSON.parse(data);
    console.log(objData);
  }
});



