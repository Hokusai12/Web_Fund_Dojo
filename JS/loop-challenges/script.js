function printOdds() {
    for(var i = 1; i <= 20; i++){
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}

function multiplesOfThree() {
    for(var i = 100; i >= 0; i--) {
        if(i % 3 === 0) {
            console.log(i);
        }
    }
}

function printDecreasingNumbers() {
    for(var i = 4; i >= -3.5; i-=1.5){
        console.log(i);
    }
}

function printSumOfNumbers() {
    var sum = 0;
    for(var i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

function printFactorial() {
    var product = 1;
    for(var i = 1; i <= 12; i++) {
        product *= i;
    }
    console.log(product);
}


console.log("Printing odd numbers 1-20: ");
printOdds();
console.log("\n\n\n\nPrinting multiples of 3 descending from 100 to 0: ");
multiplesOfThree();
console.log("\n\n\n\nPrinting numbers decreasing by 1.5: ");
printDecreasingNumbers();
console.log("\n\n\n\nPrinting the sum of values 1-100: ");
printSumOfNumbers();
console.log("\n\n\n\nPrinting the factorial of 12: ");
printFactorial();