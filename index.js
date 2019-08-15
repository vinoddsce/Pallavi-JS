// var firstName = "Pallavi";
// var lastName = "Gowda";
// var isMarried = false;
// var yearOfBirth = 1999;
// var designation = "Student";

// function display() {
//     console.log(firstName, lastName, isMarried, yearOfBirth, designation);
// }

// display();

// Syntax: 
// var obj_name OR ref_name = {
//     key1: value1, 
//     key2: value2, 
//     ...
//     keyn: valuen
// }


// Default return 'undefined'
// function sayHi() {
// }
// console.log(sayHi());


// var vinod = {
//     firstName: "Vinod",
//     lastName: "Kumar",
//     isMarried: false,
//     yearOfBirth: 1990,
//     designation: "Teacher",
//     display: function () {
//         console.log(this.firstName, this.lastName, this.isMarried, this.yearOfBirth, this.designation);
//         // console.log(firstName, lastName, isMarried, yearOfBirth, designation);
//     }
// };

// console.log(vinod.firstName);
// console.log(vinod["lastName"]);
// vinod.language = "JavaScript";
// console.log(vinod.display());

var pallavi = {
    firstName: "Pallavi",
    lastName: "Gowda",
    isMarried: false,
    yearOfBirth: 1999,
    designation: "Student",
    display: function () {
        console.log(this.firstName, this.lastName, this.isMarried, this.yearOfBirth, this.designation);
        // console.log(firstName, lastName, isMarried, yearOfBirth, designation);
    }
};

// Hoisting 

function outer() {
    console.log("Outer!!!!", this);
    function inner() {
        console.log("Inner!!!!", this);
    }
    inner();
}
outer();


// Function Constructors

var Person = function (firstName, lastName, isMarried, yearOfBirth, designation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isMarried = isMarried;
    this.yearOfBirth = yearOfBirth;
    this.designation = designation;
    this.display = function () {
        console.log(this.firstName, this.lastName, this.isMarried,
            this.yearOfBirth, this.designation);
    };
    this.calculateAge = function (currentYear) {
        console.log("Age: ", getAge(currentYear));
        function getAge(year) {
            return (year - this.yearOfBirth);
        }
    }
}

var vinod = new Person("Vinod", "Kumar", false, 1990, "Teacher");
var john = new Person("John", "Smith", true, 1986, "Designer");

// vinod.display();
vinod.calculateAge(2019);


// display(person);
// function display(person) {
//     console.log(person.firstName, person.lastName, person.isMarried,
//         person.yearOfBirth, person.designation);
// }


// console.log(john);
// console.log(vinod);

// var age = 100;
// window.age = 200;
// console.log(alert("Hi, User !!!!"));


// console.log(sayHi);
// console.log(sayHello);

// sayHi();
// sayHello();

// function sayHi() {
//     console.log("Hi ");
// }

// var sayHello = function () {
//     console.log("Hello ");
// }