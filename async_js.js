/*console.log("Start");
console.log("Middle");
console.log("End");

console.log("Start");

setTimeout(() => {
    console.log("This runs Later");
},2000);
console.log("End");*/

function synctask(){
    console.log("Task1");
    console.log("Task2");
}
console.log("Before");
synctask();
console.log("After");