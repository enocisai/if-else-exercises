// IF ELSE STATEMENTS//

let age = 21;

if(age > 17) {
    console.log("you are old")
}else {
    console.log("you are a minor")
}

//-------------------------
//IF-ELSE IF- ELSE 

let time = 12

if(time >= 0 && time <= 5){
    console.log( "It's sleep time")
}else if(time >= 6 && time <= 11){
    console.log("Good morning")
}else if(time >= 12 && time <= 18){
    console.log("Good afternoon")
}else{
    console.log("Good night")
}

///--------------------------------
/// Conditional (Ternary) Operator
// condition() ? true      :false

const youAreOld = (age >= 21) ?"You old! " : "You minor";

console.log(youAreOld)

//___________________________________


let gender = "Boy";
let ages = 18;

if(gender == "Boy") {
    if(ages >= 18){
        console.log("you are a " + gender + " not a girl" )
    } else {
        console.log("sorry");
    }
} else if (gender == "female"){
    if (ages >= 18){
        console.log(" you are a " + gender + " and old enough")
    } else {
        console.log("not ready to enter")
    }

}

