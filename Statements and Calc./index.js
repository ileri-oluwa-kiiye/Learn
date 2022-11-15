let x, y, z;

x = 5;
y=6;
z = x+y;

let date = new Date().getDate();
console.log(date)  //For some reason, this is giving me the the day of the month and not a weekday.


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


//===================Operations with JavaScript=======================||
console.log(3+4)

//We can use the += to concatenate strings and to add numbers together.
let test = "The first part."
test += "The second part I am concatenating";
console.log(test)

//The x**y (raise to power operator) performs the same function as Math.pow(x, y) i.e.

console.log(5**4)
console.log(Math.pow(5,4))
//When you check the console, you see that they're performing the same function.

x = 10;
x += 1;
x -= 3;
x *= 2;
x /= 1.5;
x **= 2;
x %= 3;


let type = typeof "";
console.log(type)

console.log(10>9)  //A way to print Booleans

let checkBoolean = "Strings are booleans"
console.log(Boolean(checkBoolean))

let booleanMinus = -0;  //0 and -0 is false, empty strings are also false. false, undefined, null are also false.
console.log(Boolean(booleanMinus))

/*
    The Nullish Coalescing Operator(??)
    The ?? operator returns the first argument. If it is null or undefined,
    it returns the second. .ie.
*/

let name = null;
let text = "missing";
let result = null ?? text;
console.log("The result is" , result,".") 

//Testing the styling of the console's messsage.
//console.log('%cHello World!')
//Okay, it didnt work, ahh.

//Testing the second method to style the console's message.
console.log('%cHello World!', 'color:red;background-color:black;')
//Oh wowww. This one that I was more skeptical about workeddd


//More examples because why not?
console.log("%cTesting this second text", 'color:black;background-color:white;font-size:33px;')
//Oh Wowwwwww. This worked too!
//I should figure out the error with the first example actually.

//=====================Strictly for calculations===================//
let addition = 67 + 50;
let subtraction = 70 - 30;
let multiplication = 5 * 100;
let division = 100/20;
let modulus = 30%7;
let raiseToPower = 4 ** 4;


//The and operator: &&
if (10>5 && 13<30) {
    console.log("This prints when the two statements are true")
}else{
    console.log("This prints when one or the two statements are false")
}

//The or operator: ||
if ( 10>3 || 15!="15" ){
    console.log("This prints if one of the statements are true");
}else{
    console.log("This prints if none of the statements are true")
}

