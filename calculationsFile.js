// local
const salary = '18 000'
// shared
var age = 27

//importing
const confirmation = require(`./namesFile`)

function calcFunct(age) {
    if(age < 25) {
        console.log('niqqar is younger: ' + confirmation.age2);
    }
    else {
        console.log('niqqar is older: ' + confirmation.age2);
    }
}

module.exports = {age, calcFunct}

//---------Things to learn-------
//Making the console.log print info on terminal when calling locally
//Displaying variables declared in a function

//---------Things learned---------
