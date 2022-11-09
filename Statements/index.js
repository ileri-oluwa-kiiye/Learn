let x, y, z;

x = 5;
y=6;
z = x+y;

//when seperated with semicolons, multiple statements on one line is allowed i.e:

let a,b,c; a=5; b=6; c=a+b; console.log(z,c); console.log("You see multiple lines work.")

/*
There are different data types.
1. String i.e "I am John Doe", "John Doe"
    These are basically usually wrapped between double quotes.

2. Numbers : They are written with or without decimals.
    i.e 10.51, 45403

3. Booleans : This is either true or false.

4. Arrays i.e [4, "John", ["An array inside another"], "last entity"]

5. Objects i.e.

var object = {
    objectweight : "30kg",
    objectheight : "50mm",
    objectname : "Illuional",
    objectage : 113,
    objectold: true
}

6. Classes : These are also objects shaa. i.e

class Car {
    constructor()
}(I'll come back to this later please.)

*/


//Point to note: JavaScript is case sensitive.

let lastname, LastName;
lastname = "Doe"
LastName = "Peterson"

console.log( lastname , LastName)

//There are four ways to declare a JavaScript Variable
/*
    Using let
        const
        var
        nothing
*/

let usingLet = "Omo"
var usingVar = "Omo"
const usingConst = "Omo"
workplease = "Omo" //Using Nothing. Let's console.log (everything)
console.log(workplease)