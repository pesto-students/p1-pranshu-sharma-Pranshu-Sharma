// Assignment-3.3

// What is the output of the below problem and why?

function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }
    let message = `Count is ${count}`;
    function log(){
        console.log(message);
    }

    return[increment,log];
}

const [increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

// Solution

// **'Count is 0'** will be logged because when we ran increment function 3 times, it only incremented 
// the value of count variable and message variable wasn't touched at all. If we want to update the 
// message variable as well, then we can modify the createIncrement function like this -

function createIncrement2(){
    let count = 0;
    let message;
    function increment(){
        count++;
        message = `Count is ${count}`;
    }
    function log(){
        console.log(message);
    }

    return[increment,log];
}

// Now if we run the program again, **'Count is 3'** will be logged.