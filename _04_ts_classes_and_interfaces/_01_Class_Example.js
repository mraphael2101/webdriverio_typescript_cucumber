var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.describe();
/** Example of how to replacate an object and access it's instance variable
 *  */
var BusinessUnit = /** @class */ (function () {
    function BusinessUnit(n) {
        this.name = n;
    }
    BusinessUnit.prototype.describe = function () {
        console.log('Business Unit: ' + this.name);
    };
    return BusinessUnit;
}());
var corporateBanking = new BusinessUnit('Corporate Banking');
var corporateBankingCopy = { name: 'instanceVal',
    describe: corporateBanking.describe
};
corporateBanking.describe();
