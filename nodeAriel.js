const fs = require('fs')


function fn2cb(name, cb) {
   var result = "XXX" + name; 
   cb(result);
}


function printDate() {
    console.log(new Date())
}

function logAsync() {
  setTimeout(() => {console.log("ASYNC DONE");}, 0)
}

var sysad = "DANNY";

//sequential because fn2cb is SYNC

fn2cb(sysad, (o) => console.log("CALLING WITH", o) );



//async CALLING
var resultString = "";

fs.readFile('/temp/readme.txt', (err, body) => {
    resultString = body.toString(); 
    console.log()
})
logAsync();

console.log(resultString)


//printDate()

//myCallback;