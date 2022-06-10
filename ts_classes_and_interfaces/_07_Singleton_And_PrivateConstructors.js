/** The Singleton Design Pattern is a common solution that is
  * used to enforce that only one instance of a class can be
  * created at runtime */
var Demo4 = /** @class */ (function () {
    function Demo4() {
    }
    Demo4.getInstance = function () {
        if (Demo4.instance) {
            return this.instance;
        }
        else {
            this.instance = new Demo4();
            return this.instance;
        }
    };
    return Demo4;
}());
var objRef1 = Demo4.getInstance();
var objRef2 = Demo4.getInstance();
// Both objects returned are the same
console.log(objRef1, objRef2);
