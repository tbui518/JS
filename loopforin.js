/*person = {
    name: "Jay",
    surname: "Bui",
    age: "22"
};

var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");

courses = [
    "compass",
    "c++",

];

var x = "";
for (var property in person)
{
    x += person[property] ;
}
    console.log(x);
*/

var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
    //console.log("Prop: " +prop);
  //console.log( prop, obj[prop]);
  //console.log( (typeof(prop)), (typeof(obj[prop])));
  console.log( obj,  (typeof(prop)), obj["a"], obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"