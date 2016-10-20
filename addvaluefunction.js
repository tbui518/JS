function add(x, y)
{
   return x + y;
}

function div(x, y)
{
    if ( y === 0 )
    {
        console.log("can't divide");
        return;
    }
   return x / y;
}

var sumofvar = div(20,2);

console.log(sumofvar);