/** This function accepts two arguments of any type.
 *  It then merges them into a single object. */
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// This code calls the above function and passes two objects as arguments with different structural types
const mergedObj1 = merge({ name: 'Max'}, { age: 30 } );
console.log(mergedObj1.age);

// Passing in different objects
const mergedObj2 = merge({ name: 'Rar', hobbies:['Conquer'] }, { age: 10856 } );
console.log(mergedObj2.age);

// With type safety which introduces a constraint for code that is better managed
const mergedObj3= merge<object, object>({ name: 'Rar', hobbies:['Conquer'] }, { age: 10856 } );
console.log(mergedObj2.age);