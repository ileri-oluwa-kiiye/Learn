//===================================THE IF LOOP==================================//


let condition
let secondcondition

if (condition) {
    //Block of code to be execute if condition is true
}else if (secondcondition) {
    //Block of code to be executed if condition is false and second condition is true
}else{
    //Block of code to be executed if both conditons above are false
}


//For example
let weekDay = "Monday";

if (weekDay == "Monday" || weekDay == "Tuesday" || weekDay == "Thursday"){
    console.log("Today is", weekDay, ", get to work, don't be lazy.")
}else if (weekDay == "Wednesday" || weekDay == "Friday"){
    console.log("Today is", weekDay, ", you have a football game today.")
}else{
    console.log("Today is", weekDay, ",take your time to rest, my love.")
}


let date = new Date().getDate();
console.log(date)  //For some reason, this is giving me the the day of the month and not a weekday.







//====================The Switch Loop====================//
/*Using the same parameters and results as the for loop above: */
switch (weekDay) {
    case "Monday":
    case "Tuesday":
    case "Thursday":
        console.log("Today is", weekDay, ", get to work, don't be lazy.");
        break;

    case "Wednesday":
    case "Friday":
        console.log("Today is", weekDay, ", you have a football game today.");
        break;
    
    default:
        console.log("Today is", weekDay, ",take your time to rest, my love.");
}




//========================The for loop=====================//
for (var i = 0; i<4; i++){
    console.log("This will print four times.")
}
/*In a for loop, this is what happens:
    for(You set the value; Specify the condition that the loop keeps running; Increment the counter{i++})
*/

//The for - of loop
let exampleArray = [46, "Second", 12, 89, true];
for(let items in exampleArray){
    console.log(exampleArray[items]);
}

//The for-in loop.................I don't know if I really know this, but God abeg
/*
for (let items of exampleArray){
    console.log(exampleArray[items])
}

Okayy, it didn't work o. Ahh.
*/

console.log(new Date().getDay())  //This gives the day of the week in number i.e Sunday=0, Monday= 1, Saturday=6;
console.log(new Date().getDate())  //Th




//===================The while loop=================// 53021651884
let j =0;
while (j<5){
    console.log("Trying the while loop for the first time");
    j++;
}