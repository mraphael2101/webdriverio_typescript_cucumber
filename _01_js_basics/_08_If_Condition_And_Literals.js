// in JS the below evaluates to if firstName has a value. In Java this would result in a compilation error
let firstName = "Rob"
if(firstName) {
    console.log("if condition evaluates to true as firstName has been assigned a value")
}

// in JS the below evaluates to FALSE asfirstName has NO value. In Java this would result in a compilation error
firstName = ""
if(! firstName) {
    console.log("if condition evaluates to true as firstName has been assigned an empty value")
}