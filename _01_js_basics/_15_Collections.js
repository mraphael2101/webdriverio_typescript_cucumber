
/*
    https://codyburleson.com/blog/a-javascript-implementation-of-java-util-map
*/

// Maps
let myMap = new Map();
myMap.put('myKey1',"Hello World!");
myMap.put('myKey2',{'prop1':'How','prop2':' are you?'});
 
console.log( myMap.get('myKey1') );
console.log( myMap.get('myKey2').prop1 + myMap.get('myKey2').prop2);

let testObj = {prop1:"Hello", prop2:" World!"};
myMap.put('key2',testObj);  // Add a different kind of object


// Sets
const set = new Set([1, 2, 3]);
const result = Array.from(set).map(element => element + 1);
console.log(result); // 👉️ [2, 3, 4]