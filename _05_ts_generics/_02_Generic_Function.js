/** This function accepts two arguments of any type.
 *  It then merges them into namespace_features single object. */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// This code calls the above function and passes two objects as arguments with different structural types
var mergedObj1 = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj1.age);
var mergedObj2 = merge({ name: 'Rar', hobbies: ['Conquer'] }, { age: 10856 });
console.log(mergedObj2.age);
