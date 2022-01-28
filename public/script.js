// var a = window.prompt("Tell me your name", "Name");
// window.alert("Hello " + a);

// func1(1,2,3); //will be known at the start


// function func1(a,b,c){
//     console.log(a+b+c);
// }

// var func2 = function(){
//     console.log("hello world");
// }

//func2(); //won't be defined until after being declared on the var


// -- sorting array
function asc(a,b){
    return a-b;
}

var arr = [10,23,31,34,5,76];
arr.sort(asc);

// for (item in arr){
//     console.log(arr[item]);
// }

var x = arr.every(function(val){
    return val > 3;
})

console.log(x);

// -- objects

// var person = {
//     firstname: "Bob",
//     lastname: "Smith",
//     id: 5555,
//     fullname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }

// function Person(f,l,i,a){
//     this.firstname = f;
//     this.lastname = l;
//     this.age = a; 
//     this.id = i;
// }

// -- event handlers

// function runcommand(){
//     document.getElementsByTagName("h1")[0].innerHTML = "ADD USERS";
// }

// document.getElementById("button").onclick = runcommand;
// document.getElementById("button").onclick = function(evt){console.log("hello");}

// -- event listeners 

// document.getElementById("button").addEventListener('click',(evt)=>{console.log("Hello")});
// document.getElementById("button").addEventListener('click',(evt)=>{console.log("world")});

// window.addEventListener('keypress',(evt)=>{console.log(evt.keyCode)});

