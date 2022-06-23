// An example of a Generic Type
var names = []; // this syntax is the same as string[] in TS
/** Promises are a concept from JS and NOT TS.
 *  A promise is a TypeScript object which is used to write asynchronous programs (code that does not run in parallel)
 *  A promise is a class that must be instantiated.
 *  A promise defines an inner function that accepts two parameters.
 *  resolve -> the argument to be processed.
 *  reject -> the argument that is used to reject the promise i.e. a rejection parameter
 *  The promise will eventually resolve to something e.g. Promise<string>
 *  If condition is true then it returns resolve else it returns the reject.
 *  */
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
        console.log('promise executed successfully');
    }, 2000);
});
// Call it like this
promise.then(function (data) { });
/** Another example of a Promise. However, this time with a success and error
 *  handler */
function asyncAction() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Async is done!");
            reject('Rejected!');
        }, 1500);
    });
    return promise;
}
// Part B
asyncAction().then(function (success) {
    console.log(success);
})["catch"](function (error) {
    // error handler is called
    console.log(error);
});
