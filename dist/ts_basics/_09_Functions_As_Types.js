// Example 1
// Is assigned the type any, by default
let myVar;
function myMethod(number1) {
    return number1;
}
// Here you are assigning a pointer to a function, to a variable of type any
myVar = myMethod;
// myVar = 5;
console.log(myVar(3));
/** The limitation with this approach is that if you assign a primitive
 * to the any variable after assigning it to point to a function (like
 * on line 12), JS will throw you a runtime error  */
// Example 2
let myVar2; // Declare a variable of type Function
myVar2 = myMethod;
console.log(myVar2(16));
/** Example 3 ***** IMPORTANT ********************************************
 * Funct Types allow us to specify which functions that we want to use specifically
 * Enter the return type of the funct after =>
 * Enter the params that are to be accepted between the round braces */
let myVar3;
