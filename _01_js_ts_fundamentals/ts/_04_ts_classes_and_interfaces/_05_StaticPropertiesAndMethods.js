var Demo1 = /** @class */ (function () {
    function Demo1() {
    }
    Demo1.myStaticMethod = function () {
        console.log("You have just called namespace_features static method");
    };
    Demo1.height = 5;
    return Demo1;
}());
var demo1 = Demo1.myStaticMethod;
console.log(Demo1.height);
