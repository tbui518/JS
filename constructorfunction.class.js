// function constructor is same as class. In JS Fucntion=Class

function person (name, surname, age)
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isAdult = function()
{
        if(this.age < 18)
            return false;

            return true;
};
    this.toString = function ()
   {
    return this.name + " " + this.surname + " " + this.age;
   };

};
    
var x = new person("Jay", "Bui", "28" )
var y = new person("Dan", "Bui", "29" )
var z = new person("Mike","Bui", "30" )


console.log(x.toString())
console.log(y.toString())
console.log(z.toString())

