//function declaration

function count(a,b){
    //parameterised function
return a + b;
}
const output1 = count(10,20)
console.log(output1)

//function expression

let sum = function (a,b){
    return a + b;
    }
    const output2 = sum(40,20) // call the function or invoke the function
    console.log(output2)

    // arrow functions from ES
    let result =  (a,b) =>{
        return a - b;
        }
        const output3 = result(40, 20) // call the function or invoke the function
        console.log(output3)

       
