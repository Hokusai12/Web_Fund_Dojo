function hungyFunction(arr) {
    var foodCount = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === "food") {
            console.log("Yummy");
            foodCount++;
        }
    }
    if(foodCount === 0) {
        console.log("I'm hungry");
    }
}

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

function largerThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var count = 0;
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] > (sum / arr.length)) {
            count++;
        }
    }
    return count;
}

function reverseArr(arr) {
    for(var i = 0; i < arr.length / 2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = temp;
    }
    return arr;
}

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i = 1; i <= n; i++) {
        fibArr.push(fibArr[i] + fibArr[i - 1]);
    }
    return fibArr;
}

console.log("Hungy Function: ");
hungyFunction([3.14, "food", "pie", true, "food"]);
hungyFunction([4, 1, 5, 7, 2]);
console.log("\n\n\n\nHigh Pass Function: ");
console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5));
console.log("\n\n\n\nLarger than Average Function: ");
console.log(largerThanAverage([6, 8, 3, 10, -2, 5, 9]))
console.log("\n\n\n\nReverse Array Function: ");
console.log(reverseArr(["a", "b", "c", "d", "e"]));
console.log("\n\n\n\nFibonacci Array Function: ");
console.log(fibonacciArray(13));