# Assignment-3.2

Create 3 simple functions where call, bind and apply are used. The intention of this exercise is to understand how they work and their differences.

## Solution

> The **call()** method calls a function with a given **this** value, and **arguments** provided individually.

**Example**

```sh
const person = {
  fullName: function(city, state) {
    return this.firstName + " " + this.lastName + " lives in " + city + ", " + state;
  }
}

const person1 = {
  firstName:"Pranshu",
  lastName: "Sharma"
}

// This will return 'Pranshu Sharma lives in Rohtak, Haryana'
person.fullName.call(person1, "Rohtak", "Haryana");
```

> The **apply()** method calls a function with a given **this** value, and **arguments** provided as an array.

**Example**

```sh
const person = {
  fullName: function(city, state) {
    return this.firstName + " " + this.lastName + " lives in " + city + ", " + state;
  }
}

const person1 = {
  firstName:"Pranshu",
  lastName: "Sharma"
}

// This will return 'Pranshu Sharma lives in Rohtak, Haryana'
person.fullName.apply(person1, ["Rohtak", "Haryana"]);
```

> The **bind()** method creates a new function that, when called, has its **this** keyword set to the provided value, with a given sequence of **arguments** preceding any provided when the new function is called.

**Example**

```sh
const person = {
  fullName: function(city, state) {
    return this.firstName + " " + this.lastName + " lives in " + city + ", " + state;
  }
}

const person1 = {
  firstName:"Pranshu",
  lastName: "Sharma"
}

const personFunction = person.fullName.bind(person1, "Rohtak", "Haryana");

// This will return 'Pranshu Sharma lives in Rohtak, Haryana'
personFunction();
```

### Differences

|  | call() | apply() | bind() |
| ------ | ------ | ------ |------ |
| Time of Execution | Now | Now | Future (when we invoke the returned function) |
| Time of Binding | Now | Now | Now |
| Arguments | List | Array | List |