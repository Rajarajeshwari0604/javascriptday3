//var val=67;
//let val2=34;
//console.log(val);
//console.log("45" == 45);
//console.log("45" === 45);
const prompt = require("prompt-sync")();

let valueStr = prompt("Enter your mark:");
let value =parseInt(valueStr)
let name = prompt("Enter your name:");
console.log(value);
console.log(name)

var mark = prompt("Enter the mark:")
if(mark <=80 & mark >=100){
    console.log("Grade A")
}
else if(mark>=60 & mark<=80){
    console.log("Grade B")
}
else if(mark>=40 & mark<=60 ){
    console.log("Grade C")
}
else if(mark>40 & mark <0){
    console.log("Grade D")
}
console.log(mark);