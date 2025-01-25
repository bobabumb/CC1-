// task 1 : variables 
let employeeName = "Captain Rex"; 
const employeeID = 1;
var isActive = true;
console.log(employeeName); // Captain Rex
console.log(typeof employeeName); // string
console.log(employeeID); // 1
console.log(typeof employeeID); // number 
console.log(isActive); // true
console.log(typeof isActive); // boolean

//task 2 : primitive data types
let productName = "credits";
const productPrice = 25;
var isAvailable = true; 
console.log(productName); // credits
console.log(typeof productName);
console.log(productPrice); // 25
console.log(typeof productPrice); // number
console.log(isAvailable); // true
console.log(typeof isAvailable); // boolean

//task 3 : number data types 
let accountBalance = 1000; 
accountBalance += 500;
console.log(accountBalance); // 1500
accountBalance -= 500;
console.log(accountBalance); // 1000
accountBalance *= 2;
console.log(accountBalance); // 2000
accountBalance /= 4;
console.log(accountBalance); // 500

//task 4 : string data types
let customerName = "Commander Cody";
let welcomeMessage = "Welcome back " + customerName + ", FOR THE REPUBLIC!";
console.log(welcomeMessage); // Welcome back Commander Cody, FOR THE REPUBLIC!

//task 5 : boolean data type
let isLoggedIn = true;
let hasAccess = isLoggedIn && true; 
if(hasAccess) {
    console.log("ACCESS GRANTED");
} else {
    console.log("ACCESS DENIED")
}