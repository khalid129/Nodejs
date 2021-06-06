(function(exports, require, module, __filename, _dirname){
    // const os = require("os");
    var a = "Node js";
    console.log(a);
})();

// Everything in node Js has been wrap in the wrapper fucntion;
// Export, module, require they all are private
// __filename, __dirname these all are public

console.log(__filename);
console.log(__dirname);