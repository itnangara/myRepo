//importing a module
const fileNames = require('./namesFile')
const fileCalculations = require('./calculationsFile')
const fileFunctGreetings = require(`./greetingsFile`)

//local declarations
//from another file/module(namesFile)
console.log(fileNames) //prints filename object as passed in the OG file
fileFunctGreetings.nameGreetings(fileNames.name)
console.log('Your current salary: ' + fileNames.amount)
fileCalculations.calcFunct() // prints the function (niqqar is old)

//from another file/module(calculationFile)
fileFunctGreetings.surnameGreetings(fileNames.surname, fileCalculations.age)


//--------------------------------------
//-------------Things Learned--------------
// 1: ANOTHER WAY OF DECLARING A FUNCTION
//    const sayHi = (surname) => {
//    console.log(`Hello `+ surname + 'your age is ' + age)}


// 2: Can have only functions in the main app.js with the console.logs in other files


// 3. Modules
//    Get more useful modules at nodejs.org/en/
//    This has documentation as well
//    {flag: 'a'} //This is used for appending new text with old text in an existing txtfile


// 4. Installing a bigger package such as lodash or bootsrap creates node modules folder which will contain all
//    packages together with their dependencies that they come with e.g. boostrap brings jquery and popper.js