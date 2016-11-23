/*for ( var i = 0; i < 5; i++)
{
    if (i === 2)
    break;

    console.log(i);

}
*/
/*
for ( var i = 0; i < 5; i++)
{
    if (i === 2)
    continue;

    console.log(i);
    
}
*/

var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");

for (var i = 0; i < programmingCourses.length; i++)
{
    
if ( i % 2 !== 0 )
programmingCourses[i].innerHTML = "even " + programingCourses[i].innerHTML;

}
