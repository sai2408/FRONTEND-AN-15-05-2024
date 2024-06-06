var pattern = /\d/g;
var text = "The cost is 25 $_dollers";
var x = text.match(pattern);
console.log(x);

var pattern = /\D/g;
var text = "The cost is 25 $_dollers";
var x = text.match(pattern);
console.log(x);

var pattern = /\s/g;
var text = "The cost is 25 $_dollers";
var x = text.match(pattern);
console.log(x);

var pattern = /\S/g;
var text = "The cost is 25 $_dollers";
var x = text.match(pattern);
console.log(x);

var pattern = /\w/g;
var text = "The cost is 25 $_dollers";
var x = text.match(pattern);
console.log(x);

var pattern = /\W/g;
var text = "The cost is 25 $_dollers";
var x = text.match(pattern);
console.log(x);

var pattern = /\bcost/g;
var text = "The cost is 25 $_dollers";
var x = text.match(pattern);
console.log(x);

//Meta characters
var pattern = /h.t/g;
var text = "The cat wear hot hat";
var x = text.match(pattern);
console.log(x);

var pattern = /^The/g;
var text = "The cat wear hot hat";
var x = text.match(pattern);
console.log(x);

var pattern = /hat$/g;
var text = "The cat wear hot hat";
var x = text.match(pattern);
console.log(x);

var pattern = /ha*t/g;
var text = "The cat wear ht hat haat";
var x = text.match(pattern);
console.log(x);

var pattern = /ha+t/g;
var text = "The cat wear ht hat haat";
var x = text.match(pattern);
console.log(x);

var pattern = /hats?/g;
var text = "The cat wear hot hats";
var x = text.match(pattern);
console.log(x);

var pattern = /\d{10}/g;
var text = "7893570611";
var x = text.match(pattern);
console.log(x);

var pattern = /[ch]at/g;
var text = "The cat wear hot hat";
var x = text.match(pattern);
console.log(x);

var pattern = /hat|cat/g;
var text = "The cat wear hot hat";
var x = text.match(pattern);
console.log(x);