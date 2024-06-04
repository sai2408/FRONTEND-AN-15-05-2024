//Creation
var a = [10,20,30,40,50];
var b = new Array('a','b','c','d');
console.log(a);
console.log(b);
//Accessing thorough Indexing
console.log(a[3]);
console.log(b[2]);
//Modification of Elements
a[0] = 100;
console.log(a);
b[2] = "Sai";
console.log(b);
//Push
a.push(600);
console.log(a);
//pop
b.pop()
console.log(b);
//shift
a.shift();
console.log(a);
//Unshift
a.unshift(100);
console.log(a);
//slice
x = [1,2,3,4,5,6,7,8,9,0];
console.log(x.slice(3,6));
//concat
var r = a.concat(b);
console.log(r);
//join
var c = ["Sai","vardhan","T"];
var name = c.join(" ");
console.log(name);
//indexof
var m = [10,20,30,40,20,50];
console.log(m.indexOf(20));
//forEach
var values = ["Sai","Vardhan","T"];
values.forEach(function(x){
    console.log(x);
});
//Map
var val = [1,2,3,4,5];
let res = val.map(function(x){
    return x*2;
});
console.log(res);
//Filter
var v = [1,2,3,4,5,6,7,8,9];
let res1 = v.filter(function(x){
    return x%2==0;
});
console.log(res1);
//Reduce
var items = [1,2,3,4,5];
var res3 = items.reduce(function(acc,cv){
    return acc+cv;
},0);
console.log(res3);