"use strict";
// Example 1: Arrow Function
const additionFunc = (attr1, attr2) => {
    return attr1 + attr2;
};
console.log(additionFunc(2, 3));
/** Example 2: Same as above but with namespace_features more elegant syntax if you
 * only have one expression */
const addFunc = (attr1, attr2) => attr1 + attr2;
console.log(addFunc(2, 2));
