// Global scope example


let userName = " Habkkuk Jama'a Chabagaje";
const greetings = "Good day Mr." ;

function globalFunc(){
    return `${greetings}` + `${userName}` ;
};

const global = document.getElementById("global");
global.innerHTML = globalFunc();

// Function/local Scope
functionScope();
function functionScope(){
     
    let country = "Nigeria";
    let person = "Habakkuk JC"
    const local = document.getElementById("local");local.textContent= person + " is a " + country;
   
};

// Block Scope
// Variables declared with let and const inside a code block are called block-scoped,which means they are only accessible within that block. this does not apply varible declared  usinh var keyword.
{ 
    const blockScope = document.getElementById("blockscope");
    blockScope.textContent = userName
    let surname = "Jama'a";
    let middleName = "Chabagaje" ;
    let firstName = "Habakkuk" ;
    userName = " User name: " + surname + firstName + middleName + surname; 
};


// Variable declared using let and const

let x = 23 ; //initial declaration
x = 77;  //value reasigned
let y = 20
let sum = x + y;
const letVariables = document.getElementById("letvariable");
letVariables.textContent = "The Sum is: " + sum;

// const variables

const num1 = 100 ; //initial declaration
// x = 77; value reasigned which can not work
const num2 = 2
const total = num1 / num2 ;
const constVariables = document.getElementById("constvariable");
constVariables.textContent =  "The result is " + total;

// Arrow Fuction
//arrow fuction were introduced in es6 which allow shorter js syntax expression. You don't need the function keyword, the return keyword, and the curly brackets).
let arrowfunc = (a , b ) => a * b;
let arrowResult = arrowfunc(10 , 10)
const arrowfunction = document.getElementById("arrow");
arrowfunction.textContent = " the result is: " + arrowResult;

//the code below can also work
let arrow = (b , c )=>{
    return b * c
};
let result = arrow(10 , 5);
const arrow2 = document.getElementById("arrow2");
arrow2.textContent = " the arrow2 result is: " + result;

//Array Emplementation
//Array are object type designed for storing data collections, they can accept diff data type be it boolean, object, strings, numbers or fuctions.
//Arrays are ordered based on their index number which means they first element is at index number 0 and second element at index 1 etc. 

const cars = ["BMW", "BENZ", "TOYOTA", "IVM", "NISAN", "MITSUBISHI" ];

// items can be added or removed.
cars.push("GMC"); //GMC added.
cars.shift("BMW");//BMW removed.
const myArrs = document.getElementById("array"); 
myArrs.textContent = "My favorite cars are: " + cars;

//adding elements to empty array
const emptyArry = [];
emptyArry[0] = "Mango";
emptyArry[1] = "Apple"
emptyArry[2] = "Banana"
emptyArry[3] = "Water Melon"
emptyArry[4] = "Cashew"

const emptyArrs = document.getElementById("emptyarray"); 
emptyArrs.innerHTML = "My favorite fruits are: " + emptyArry;

// Map Method 
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
const mapMethod = document.getElementById("mapmethod");
mapMethod.textContent = "The double of the numbers are: " + doubled; 

// or
const countryNames = ["Finland", "Sweden", "Denmark", "Norway", "Iceland", "Nigeria"];
const nameLengths = countryNames.map(arrFunc);
function arrFunc(nations){
    return nations.length;
};
const mapMethod2 = document.getElementById("mapmethod2");
mapMethod2.textContent = "The length of the country names are: " + nameLengths;

// Filter Method
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const ages = [32, 33, 16, 40];
const resultFilter = ages.filter((age) => age >= 18);
const filterMethod = document.getElementById("filtermethod");
filterMethod.textContent = "The ages above 18 are: " + resultFilter;  

// Filter method2
const examScores = [96, 47, 113, 89, 100, 102];
const highScores = examScores.filter(score => score >= 100);
const filterMethod2 = document.getElementById("filtermethod2");
filterMethod2.textContent = "The scores above 100 are: " + highScores;  

// Reduce Method
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbs = [1, 2, 3, 4];
const sumReduce = numbs.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const reduceMethod = document.getElementById("reducemethod");
reduceMethod.textContent = "The sum of the numbers is: " + sumReduce;

// or
const sumReduce2 = numbs.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0);   
const reduceMethod2 = document.getElementById("reducemethod2");
reduceMethod2.textContent = "The sum of the numbers is: " + sumReduce2; 

// The forEach() Method
//The forEach() method executes a provided function once for each array element.
const letters = ['a', 'b', 'c'];
let text = "";

letters.forEach(forEachFunction);

function forEachFunction(value) {
    text += value + ", ";
}

const forEachMethod = document.getElementById("foreachmethod");
forEachMethod.textContent = "The letters are: " + text;

// or
const letters2 = ['d', 'e', 'f'];
let texts = ""; 

letters2.forEach(function each(value) {
    texts += value + ", ";
});

const forEachMethod2 = document.getElementById("foreachmethod2");
forEachMethod2.textContent = "The letters are: " + texts;

// splice Method
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); //adds Feb at index 1
const spliceMethod = document.getElementById("splicemethod");
spliceMethod.textContent = "The months are: " + months;
//or
const months2 = ['Jan', 'March', 'April', 'June'];
months2.splice(4, 0, 'July', 'Aug'); //adds July and Aug at index 4
const spliceMethod2 = document.getElementById("splicemethod2");
spliceMethod2.textContent = "The months are: " + months2;   

// Objects
//Objects are variables too. But objects can contain many values.   
const person = {firstName:"Habakkuk", lastName:"Jama'a", age:25, eyeColor:"black"};

const objects = document.getElementById("objects");
objects.textContent = "My name is " + person.firstName + " " + person.lastName + ", I am " + person.age + " years old and my eye color is " + person.eyeColor; 

// or
const person2 = {   
    firstName: "Habakkuk",
    lastName: "Chabagaje",
    age: 25
};
person2.nationality = "Nigerian"; //adding new property
const objects2 = document.getElementById("objects2");
objects2.textContent = "My name is " + person2.firstName + " " + person2.lastName + ", I am " + person2.age + " years old and I am a " + person2.nationality;

// or
const person3 = {   
    firstName: "Habakkuk",
    lastName: "Chabagaje",              
    age: 25,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
const objects3 = document.getElementById("objects3");
objects3.textContent = "My full name is " + person3.fullName();

// or
const person4 = {   
    firstName: "Habakkuk",
    lastName: "Chabagaje",      
    age: 25,            

    details: function() {
        return this.firstName + " " + this.lastName + ", age " + this.age;                                          
    }
};
const objects4 = document.getElementById("objects4");
objects4.textContent = "My details are: " + person4.details();








