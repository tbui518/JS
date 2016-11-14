var videoCourses = {
    "PHP",
    "MYsql",
    "Javascript",
    "PDO",
    "Grunt.js",
    "SASS"

};


function printCourses(idOfUlList)
{
    var courses = documents.getElementByID(idOfUlList).getElementsByTagName("li");
    var i = 0;

    while(i < courses.length)
    {
        result.innerHTML += courses[i].innerHTML +"<br>";
        i++;

    }
}

printCourses("programmingCourses");











//var result = document.getElementById("result");


//var i = 0;


//var programmingCourses = document.getElementByID("programmingCourses").getElementsByTagName("li");


/*while (i < videoCourses.length)
{
    result.innerHTML += videoCourses[i];

    i++;

} */

/*
while (i < videoCourses.length)
{
    if (videoCourses[i]) === "Mysql")
        result.innerHTML += "helllooo: ";
    result.innerHTML += videoCourses[i] + "<br>";
    
    i++;

}
*/

/*while ( i < programmingCourses.length)
{
result.innerHTML += programmingCourses[i].innerHTML+"<br>";
i++

}
*/




//expression while (i < 5) inside parathesis is expression (i < 5)
//result.innerHTML += videoCourses[0];
//result.innerHTML += videoCourses[0];
//result.innerHTML += videoCourses[0];
//result.innerHTML += videoCourses[0];
//result.innerHTML += videoCourses[0];
//result.innerHTML += videoCourses[0];
//result.innerHTML += videoCourses[0];


