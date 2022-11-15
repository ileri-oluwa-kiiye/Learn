// THE IF LOOP



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
let weekDay = "Thursday";

if (weekDay == "Monday" || weekDay == "Tuesday" || weekDay == "Thursday"){
    console.log("Today is", weekDay, ",get to work, don't be lazy.")
}else if (weekDay == "Wednesday" || weekDay == "Friday"){
    console.log("Today is", weekDay, ", you have a football game today.")
}else{
    console.log("Today is", weekDay, ",take your time to rest, my love.")
}

let date = new Date().getDate();
console.log(date)  //For some reason, this is giving me the the day of the month and not a weekday.

