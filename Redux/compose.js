import {compose} from 'redux';

function removeSpace(string){
    return string.split(" ").join("");
}

function repeatString(string){
    return string.repeat(2);
}

function upperCase(string){
    return string.toUpperCase();
}

// Now we have to apply these methods to a string one after another

// One method to achieve this is to use the return value of one method as the input to the next method.
// console.log(upperCase(repeatString(removeSpace("hello world"))));

// This is not very readable and we have to keep track of the order of the methods.
// We can use the compose function from redux to make this more readable.

const composedFuntion = compose(upperCase, repeatString, removeSpace);
console.log(composedFuntion("hello world"));