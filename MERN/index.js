console.log("hello kavi");
console.log("its a nice day");
var mynum=7.0;
var array =[1,2,3];
var mystr="kavi";
console.log(mystr);
console.log(mynum);
console.log(mynum*8,array);
var details ={
    name:"yuvaraj",age:19
}
console.log(details);
console.log(typeof "hello");
console.log(typeof 10);
console.log(typeof [2,3,4]);
console.log(typeof typeof true);


// function 

function sum(a,b){
    console.log("add" ,a+b);
}
function sub(a,b){

    console.log("sub",a-b);
}
function multi(a,b){
    console.log("multiplication",a*b);
}
function div(a,b){
    console.log("divison",a/b);
}
    console.log("calculator");
    //sum(7,8);
    sub(8,2);
    multi(7,8);
    div(4,2);


    // anonynous function 
var sum=function(a,b){
    return a+b;
};
console.log(sum(7,3));

//arrow function 
var sum=(a,b)=>{
    return a*b;
};
console.log(sum(3,4));


var fun1=(fun)=>{
    fun()

}
var fun2=()=>{
    console.log("hai");

}
var fun3=()=>{

}
fun1(fun2);   
  //fun1 is higher order function ,function whihc has argument of another function ,fun 2 is call back function 

  var fun1 = (a) => {
    return (b) => {
        return a * b;
    }
};

console.log(fun1(4)(3));


var sec = 0;
var min = 0;
var hr = 0;


setInterval(() => {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hr++;
        }
    }
    console.log(`Time: ${hr}h ${min}m ${sec}s`);
}, 1000);


setTimeout(() => {
    console.log("hello");
}, 500000);


var fun1=(fun)=>{
    console.log("hai");
    fun();
}
var fun2=()=>{
    console.log("hello");
}
fun1(fun2);


function greet(name,call){
    console.log("preparing");
    setTimeout(function(){
        call("hello"+name);
    },2000);
    console.log("hai");

}
function display(mesage){
    console.log(mesage);
}

greet("kavi",display);


var name ="kavi";
function fum(){
    console.log(name);
}

//lexical scope

function outer(){
    let msg="hI DA ";
    function inner(){
        console.log(msg);

    }
    inner();
}
outer();

//dynamic change -let
//no change -var
//constant result-const
//hoisting  only var has undefined in dead zone  not for let ,char it shows error 
//=== type compare (datatype) if match true ohterwise false.


fun();
function fun(){
    console.log("hai js");
}

