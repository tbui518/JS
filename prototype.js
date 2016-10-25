// function constructor is same as class. In JS Fucntion=Class

function person (name, surname, age)
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isAdult = function()
{
        if(this.age < 18)
            return true;

            return false;
};
    this.toString = function ()
   {
    return this.name + " " + this.surname + " " + this.age;
   };

};


function age (age)
{
this.age = age;
this.isAdult = function()
{
        if(this.age < 18)
            return false;
        else{return true;}
            
};
};
    


/*var x = new person("leeroy", "jenkins", "28" )
var y = new person("john", "smith", "29" )
var z = new person("bill","will", "17" )
*/
var a = person.age = 15;
 

//x.somethingNew = 5;

//console.log(x.toString())
//console.log(y.toString())
//console.log(z.toString())
//console.log(z.isAdult())

console.log(a)
console.log(age(a))


//var x = person.prototype.somethingNew = 1;
//var y = person.prototype.somethingNew = 1;

//console.log(x,y)
//console.log(z.somethingNew.toString())
