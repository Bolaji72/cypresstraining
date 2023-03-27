//primitve datatypes

/**
 * string
 * numbers
 * BigInt
 * null
 * undefined
 * symbol
 */


// NON PRIMIIVE
//object
// anything in curly braces is called an object

//this keyword using for reference purpose with classes or objects
const nameofperson = 'manny'; // string
const email ='test@test.com';
const phone = 015255522; // integer
const bool = true; // boolean
const a = null; // null
const b = undefined; // undefined
const person = {
firstName:'joe',
lastName:"marshall",
age:50,
city: 'leeds',
country: 'united kindgom',
address:'leeds'
}


fullDetails: function name(params) {
    return (
        this.firstName + " " +
        " " +
        this.lastName + " " +
        " " +
        this.age + " " +
        " " +
        this.country
    )    
}

//primitive datatypes
console.log(nameofperson, email, phone, bool)

//non primitve datatypes
console.log(person.firstName)
console.log(person.age)
console.log(person.city)
console.log(person.country)

