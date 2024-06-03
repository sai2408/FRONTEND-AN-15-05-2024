//LoopingStatements
//While Loop
//While
console.log("While Loop");
var x = 0;
while(x<=5){
    console.log(x);
    x++;
}
//Do While
console.log("Do While Loop");
var x = 0;
do{
    console.log(x);
    x++;
}while (x <= 5);
//for Loop
//for
console.log("For Loop");
for(var i=0;i<=5;i++){
    console.log(i);
}
//for in
console.log("For In Loop");
var x = {
    a : 10,
    b : 20,
    c : 30,
    d : 40
}
for (var k in x){
    console.log(k + " -> " + x[k]);
}
//For Of
console.log("For Of Loop");
var m = [10,20,30,40,50];
for (var i of m){
    console.log(i);
}

//Loop controlled statements
//Break
console.log("Break statement");
var x = [29,19,19,18,14,16,17];
for (var k of x){
    if (k<18){
        break;
    }
    console.log(k);
}
//continue
console.log("Continue statement");
var x = [29,19,19,18,14,16,27];
for (var k of x){
    if (k<18){
        continue;
    }
    console.log(k);
}