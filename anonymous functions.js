 /*var x = function test()
 {
     console.log("test");
 }

 x();
 */

function test(f)
{
    f();
}

test(
    function(){
        console.log("test");
    }
);
