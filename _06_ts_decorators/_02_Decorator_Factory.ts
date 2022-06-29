/* A decorator factory returns a decorator function but allows us to configure it
* and assign it as a decorator to something */


/* A function that returns an inner anonymous function.
*  Similar to functional interfaces' topic in Java */
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }

}

@Logger("LOGGING - Person")
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating a person object...');
    }
}

const person = new Person();
console.log(person);