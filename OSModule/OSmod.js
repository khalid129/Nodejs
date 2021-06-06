const os = require("os");

// Find how much RAM is free in PC
// const freememory = os.freemem();
// console.log(`${freememory/1024/1024/1024}`);

// Find total RAM size in PC
// const totalmemory = os.totalmem();
// console.log(`${totalmemory/1024/1024/1024}`);

// const archi = os.arch();
// console.log(archi);

// const hostname = os.hostname()
// console.log(hostname);

// const platform  = os.platform();
// console.log(platform);

const temporary = os.tmpdir();
console.log(temporary);