//Arithemetic Operators
console.log("Arithemetic Operators");
var a = 10;
var b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
//Assignment Operators
console.log("Assignment Operators");
var a = 10;
a = a + 2;
console.log(a);
a -= 2;
console.log(a);
a *= 2;
console.log(a);
a /= 2;
console.log(a);
a %= 2;
console.log(a);
//Comparision Operators
console.log("Comparision Operators");
var a = 5;
var b = '5';
console.log(a==b);
console.log(a===b)
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
//Logical Operators
console.log("Logical Operators");
var a = 5;
var b = 2;
console.log((a>b) && (a<b));
console.log((a>b) || (a<b));
console.log(!(a<b));
//Unary Operators
console.log("Unary Operator");
var a = '5';
console.log(+a);
console.log(-a);
//Ternary Operators
console.log("Ternary Operator");
var a = 10;
var b = 20;
var x = (a < b) ? "Yes" : "No";
console.log(x);
//Incerement Operators
console.log("Increment Operator");
var x = 10;
console.log(x++);
console.log(x);
var y = 11;
console.log(++y);
console.log(y);
//Decrement Operators
console.log("decremen Operator");
var x = 10;
console.log(x--);
console.log(x);
var y = 11;
console.log(--y);
console.log(y);
//String Concatination Operators
console.log("String Concatination Operators");
var a = "Hello ";
var b = "World!";
var c = a+b;
console.log(c);