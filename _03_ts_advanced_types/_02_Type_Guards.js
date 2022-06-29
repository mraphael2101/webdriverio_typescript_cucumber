// In order to be able to leverage the type Union we must use a type guard as per below:
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var Admin5Vals = {
    name: 'Katie',
    privileges: ['Last']
};
function printEmployeeInfo(emp) {
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInfo(Admin5Vals);
printEmployeeInfo({ name: 'Lawrence', startDate: new Date() });
