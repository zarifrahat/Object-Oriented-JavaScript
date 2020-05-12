function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

function sum2(...args){

    return args.reduce((acc, ele) => {return acc + ele})
}

// console.log(sum2(1, 2, 3, 4));
// console.log(sum2(1, 2, 3, 4, 5));

// Function.prototype.myBind = function () {
//     const that = this;
//     const args = Array.from(arguments);
//     return function(){
//         const args1 = Array.from(arguments);
//         return that.apply(args[0], args.slice(1).concat(args1));
//     }
// }

Function.prototype.myBind = function(contex, ...rest) {
    const that = this;
    return function(...others) {
        return that.apply(contex, rest.concat(others));
    }
}


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

console.log(markov.says.myBind(pavlov, "meow", "Zarif")());


function curriedSum(numArgs) {
    let numbers = [];

    return function _currySum(arg) {
        numbers.push(arg);
        if (numbers.length === numArgs) {
            return numbers.reduce((acc,ele) => {return acc + ele});
        } else {
            return _currySum;
        }
    }
}

// console.log(curriedSum(4)
const sums = curriedSum(4);
console.log(sums(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs) {
    const that = this;
    const numbers = [];

    return function _midcurry(arg){
        numbers.push(arg);
        if (numbers.length === numArgs){
            return that.apply(null, numbers);
        } else {
            return _midcurry;
        }
    }
}




function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
// console.log(sumThree.curry(3));
// console.log(sumThree.curry(3)(4));
// console.log(sumThree.curry(3)(4)(20));
// console.log(sumThree.curry(3)(4)(20)(6));
// console.log(sumThree.curry(3)(4)(20)(6)(10));

// (4)(20)(6); // == 30

Function.prototype.curry = function(numArgs){
    const that = this;
    let numbers = [];
    return function _midcurry(...args){
        numbers = numbers.concat(args);
        if (numbers.length === numArgs){
            return that.apply(null, numbers);
        }
        else if(numbers.length > numArgs){
            return that.apply(null, numbers.slice(0, numArgs))(numbers.slice(numArgs));
        } else {
            return _midcurry;
        }
    }
}

console.log(sumThree.curry(3)(4, 20));
