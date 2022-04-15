# Assignment-3.4

Refactor the below stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope.

```sh
function createStack(){
    return{
        items:[],
        push(item){
            this.items.push(item);
        },
        pop(){
            return this.items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
stack.items= [10,100,1000];// Encapsulation broken!
```

## Solution

```sh
function createStack(){
    let items = [];
    return{
        getItems(){
            return items;
        },
        push(item){
            items.push(item);
        },
        pop(){
            return items.pop();
        }
    };
}
const stack = createStack();
```

#### Explanation

I've replaced the **items** array with **getItems** function which returns the **items** array. According to the concept of closures, **getItems** function has access to the **items** array but we can't access the **items** array directly from outside. So the only way to alter the **items** array is by using the functions being returned i.e **getitems**, **push** and **pop**. In this way, we can keep any data private to any function.