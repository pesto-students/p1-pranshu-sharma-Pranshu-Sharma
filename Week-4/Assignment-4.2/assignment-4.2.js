// Assignment-4.2

// Create an object called **Teacher** derived from the **Person** class, and implement 
// a method called **teach** which receives a string called **subject**, and prints out:

// [teacher's name] is now teaching [subject]

// Solution

var Person = function() {};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

var Teacher = function() {
  this.teach = function(subject){
    console.log(this.name + " is now teaching " + subject);
  }
}

Teacher.prototype = new Person();

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");

// Output

// Adam is now teaching Inheritance
