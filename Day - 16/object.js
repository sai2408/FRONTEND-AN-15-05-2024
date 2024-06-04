//Method - 1
//Creation of an object
var details = {
    name : "sai",
    Gender : "Male",
    Age : 30,
}
//Accessing
console.log(details.name);
//Adding an Elements
details.course = "Full stack"
//Delete an element
delete details.Age;
//Methods
console.log(Object.keys(details));
console.log(Object.values(details));
console.log(Object.entries(details));
//Method - 2
//Creation 
var car = new Object();
car.name = "Innova";
car.Company = "Toyato";
car.gear = "Manual";
console.log(car);
//Accessing of elements
console.log(car["name"]);
//Adding elements 
car["fuel"] = "Petrol";
console.log(car);
//Modification of elements
car["gear"] = "Automatic";
console.log(car);
//Deleting elements
delete car["Company"];
console.log(car);

//Methods
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));