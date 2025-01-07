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


//setInterval(() => {
 //   sec++;
   // if (sec === 60) {
     ///   sec = 0;
        //min++;
        //if (min === 60) {
          //  min = 0;
           // hr++;
        //}
    //}
    //console.log(`Time: ${hr}h ${min}m ${sec}s`);
//}, 1000);


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

let str = "Hello, World!";0
let start = str.substring(0, 7);
let end = str.substring(12);    
let replaced = start + "Universe" + end;
console.log(replaced);

let stri = "apple banana apple orange";
let replaceds = str.split("apple").join("grape");
console.log(replaceds); 

let string = "apple banana apple orange";
let replaceda = str.replace("apple", "grape");
console.log(replaceda); 




var t = 8;
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
    if (t === 8) {
        resolve("on time");
    } else {
        reject("late");
    }
    },2000)
});

promise
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    });


    function D() {
        return new Promise((resolve, reject) => {
            fetch("https://jsonplaceholder.typicode.com/todos/1") 
                .then((response) => response.json()) 
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }
    
    D()
        .then((data) => console.log(data))
        .catch((error) => console.log("wrong"));
    

const func=(a,b)=>a+b
console.log(func(10,20))// does not need return for this function 


const pr1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("loading...");
            resolve("data loaded");
        }, 1000); 
    });
};

const pr2 = (prevresult) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("validating...");
            resolve(prevresult + " | permission validated");
        }, 1000); 
    });
};

const pr3 = (prevresult) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("accessing dashboard...");
            resolve(prevresult + " | dashboard accessed");
        }, 1000); 
    });
};

pr1()
.then((result1) => pr2(result1))
.then((result2) => pr3(result2))
.then((finalResult) => console.log(finalResult))
.catch((error) => console.log("Error"));

pr1.call([pr1(),pr2(),pr3()])
.then(()=>console.log("completed"))
.catch(()=>console.log("error"));


///
 

const order = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order placed...");
            resolve({ orderId: 123, amount: 50 }); 
        }, 1000);
    });
};

const placeOrder = (orderDetails) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing order...");
            resolve(orderDetails);
        }, 1000);
    });
};

const processPayment = (orderDetails) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Processing payment...");
            if (orderDetails.amount <= 100) {
                resolve("Payment successful");
            } else {
                reject("Payment error: Amount exceeds limit");
            }
        }, 1000);
    });
};

const sendConfirmation = (paymentResult) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Sending confirmation...");
            resolve("Order confirmed: " + paymentResult);
        }, 1000);
    });
};

order()
    .then((orderDetails) => placeOrder(orderDetails))
    .then((orderDetails) => processPayment(orderDetails))
    .then((paymentResult) => sendConfirmation(paymentResult))
    .then((confirmationMessage) => console.log(confirmationMessage))
    .catch((error) => console.log(error));


    const orderf =async()=>{
        try{
            const data =await placeOrder(total);
            await processPayment(data);
            await sendConfirmation();
            console.log("home page ");

        }
        catch(error){
            console.log(error);

        }

    };
    orderf();


    