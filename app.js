const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = (valueInYen * 0.8)/127.9;
    //return the dollar value
    return valueInPound;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = (valueInDollar * 127.9)/ 1.2;
    //return the dollar value
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

