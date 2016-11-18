var products = [
    "Python",
    "Java",
    "SQL",
    "Javascript"
];

products[4] = "nodejs";
products[products.length-3] = "c++";
products.push("reactjs");

console.log(products);
console.log(products[3]);
console.log(products[4]);
console.log(products[5]);

var person = [];

person["name"] = "Jay";
person["surname"] = "Bui";

console.log(person.name);

// associative arrays

var person = [];

person["name"] = "Jay";
person["surname"] = "Bui";

console.log(person.name);
console.log(person["surname"]);

// this is for JS DOM - 
// document.getElementById("programmingCourses") = document.getElementByID("programmingCourses").getElementsByTagName("li");

