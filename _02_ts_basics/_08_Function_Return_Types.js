"use strict";
// In this instance, the return type is string
function demo2() {
    return 'sample';
}
console.log(demo2());
/** A function can only have the return type undefined in it's declaration
 * when you use the return keyword as per below - only */
function demo3() {
    return;
}
console.log(demo3());
function demo() {
}
console.log(demo()); // prints undefined
