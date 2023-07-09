var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not namespace_features constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Office = /** @class */ (function () {
    function Office(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        console.log(name, 'Capacity: ' + capacity);
    }
    return Office;
}());
var ITOffice = /** @class */ (function (_super) {
    __extends(ITOffice, _super);
    // Declaring the argument 'public admins: string' is shortcut to having to initialise in the conventional way
    function ITOffice(name, capacity, hasVPN, admins) {
        var _this = _super.call(this, name, capacity) || this;
        _this.name = name;
        _this.capacity = capacity;
        _this.admins = admins;
        _this.hasVPN = hasVPN; // Conventional approach
        console.log('Has VPN ' + hasVPN + 'Appointed: ' + admins);
        return _this;
    }
    return ITOffice;
}(Office));
var myOffice = new Office("Catalin's office", 40);
var myITOffice = new ITOffice("Mark's office", 20, true, ' Robert -> Admin Officer');
