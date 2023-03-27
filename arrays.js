// const keyword

// declaration method 1

//  const cars = ['toureg','ford', 'peugeot', 'saab'];


//declaration method 2

// const cars =[];
// cars[0]= "mazda"
// cars[1]="fiat"
// cars[2]="dasuki"
// cars[3]="benz"
// console.log(cars)

//Arrays Functions
const tools = ['selenium', 'cypress','playwright','katalon','protractor'];

const str = tools.toString();
console.log(str);

const join = tools.join(" + "); // Adds all elements in the array
console.log(join);

const shift = tools.shift(); // removes the first element
console.log(tools);

const unshift = tools.unshift('AI Marble Tool');// inserts new elements at the start of an array
console.log(tools);

const pop = tools.pop(); //delete last element from the array
console.log(tools);

const push = tools.push('Apium'); // adds new elements to the array
console.log(tools);

const sort = tools.sort(); // sort arrays into alphabetical order
console.log(tools);

const names1 =['cole','ayo', 'grace'];
const names2 =['bola','gbolu', 'anjola'];

const merge = names1.concat(names2);
console.log(merge);

let type =typeof merge;
console.log(type)











