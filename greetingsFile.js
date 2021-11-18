//const greetingsOb = require('./calculationsFile')

function nameGreetings(name) {
    console.log('Your name is ' + name)
}

function surnameGreetings(surname, age) {
    //console.log(fileCalculations)
    console.log(`Hello ${surname} your age is ${age}`)
}

module.exports = {nameGreetings, surnameGreetings}