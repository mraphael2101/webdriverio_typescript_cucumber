var userInput = undefined; // or use null as an alternative
// If null or undefined use the fallback value
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default Value';
console.log(storedData);
