function countAndDescribe(element) {
    var descriptionText = 'Empty string literal';
    if (element.length === 1) {
        descriptionText = '1 element exists';
    }
    else if (element.length > 1) {
        descriptionText = element.length + " elements exist";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there'));
/* You cannot call this method with a number as a number does not have a length. However,
the function accepts arguments that can be manipulated with .length method such as string
*/ 
