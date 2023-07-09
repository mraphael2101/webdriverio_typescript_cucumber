/* An example of Auto-binding a method to class in which the decorator will
 override the old descriptor with a new one which adds an extra getter method  */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target is either the prototype of the object,
// or it is the constructor if we are adding the decorator to a method
function Autobind(target, methodName, descriptor) {
    var originalMethod = descriptor.value; // This provides access to the original method
    var adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            // The this keyword will refer to whatever object triggers this get method
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjustedDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.message = 'This works';
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        Autobind
    ], Printer.prototype, "showMessage");
    return Printer;
}());
var p = new Printer();
p.showMessage();
