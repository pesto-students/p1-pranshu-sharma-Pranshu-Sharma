# Assignment-4.1

Implement a function named getNumber which generates a random number. If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep the promise resolution/rejection time as a variable.
> 1. JS promises should not be used.
> 2. A custom promise function should be created.
> 3. This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
> 4. Should be able to accept callbacks as props.

## Solution

```sh
class CustomPromise {
  constructor(handler) {
    this.status = "pending";
    this.value = null;

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "resolved";
        this.value = value;
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
      }
    };

    handler(resolve, reject);
  }

  then(thenFunction) {
    if (this.status !== "rejected") {
      thenFunction(this.value);
    }
  }

  catch(catchFunction) {
    if (this.status !== "resolved") {
      catchFunction(this.value);
    }
  }
}

const p1 = new CustomPromise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 101);
  console.log("Random Number > ", randomNumber);
  if (randomNumber % 5 === 0) {
    reject("Promise Rejected");
  } else {
    resolve("Promise Resolved");
  }
});

p1.then((val) => {
  console.log(val);
});
p1.catch((val) => {
  console.log(val);
});
```
