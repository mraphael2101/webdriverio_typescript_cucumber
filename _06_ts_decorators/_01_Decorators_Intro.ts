/* The decorator runs when the interpreter finds your constructor definition and not
* when you use that constructor declaration to instantiate an object */


// This is a decorator function which prints the output from the constructor
// Decorators usually start with an upper case letter
function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

@Logger
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating a person object...');
    }
}

const person = new Person();
console.log(person);