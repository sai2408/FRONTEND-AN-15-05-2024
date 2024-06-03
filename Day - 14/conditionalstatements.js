//If Statements
var x = 12;
if (x%2 == 0){
    console.log("It's an even Number");
}
//If Else Statements
var x = 13;
if (x%2 == 0){
    console.log("It's an even Number");
}
else{
    console.log("It's an Odd number");
}
//If Else If Else 
var x = 10;
if(x>0){
    console.log("Postive");
}
else if(x == 0){
    console.log("Zero");
}
else{
    console.log("Negetive");
}
//Switch Case
var x = 3;
switch (x){
    case 1:
        console.log("Number is 1");
        break;
    case 2:
        console.log("Number is 2");
        break;
    default:
        console.log("Some number")

}
//Nested Conditional Statements
var x = 18;
var card = true;
if(x >= 18){
    if (card == true){
        console.log("Yes you can vote !");
    }
    else{
        console.log("Voter Card Required");
    }
}
else{
    console.log("Not eligible");
}