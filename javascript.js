//Program 1(Array Manipulation)

let dept=["IT","ECE","AIML","BME","CSE"];

//push()
dept.push("EEE");
console.log(dept)

//pop()
dept.pop("CSE");
console.log(dept)

//unshift
dept.unshift("EEE");
console.log(dept)

//shift
dept.shift("CSE");
console.log(dept)

// Program 2(Array Searching)

//indexOf()
let fruits=["Mango","Apple","Pineapple","Grapes"];
console.log(fruits.indexOf("Apple"))

//includes()
console.log(fruits.includes("Blueberry"))//Flase
console.log(fruits.includes("Mango"))//True

//find()
let array = [-10, -0.20, 0.30, -40, -50];
let found = array.find(function (element) {
    return element > 0;
});
console.log(found);

// Program 3(Array sorting)

var array=[10,30,50,70,90,20,40,60,80];
//sort()
console.log(array.sort())
//reverse()
console.log(array.reverse())

// Program 4(Array filtering)

filtering()
const words = ['Renu', 'yuva', 'nisha', 'vishalini', 'Rohini'];
const result = words.filter((word) => word.length > 4);
console.log(result);

// Program 5(Array Mapping)

//Mapping()
var array=[10,20,30,40,50,60];
console.log(array.map(num=>num+4))
