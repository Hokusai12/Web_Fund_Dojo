var crustsArr = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
var saucesArr = ["marinara", "traditional", "olive oil", "ranch", "white sauce"];
var cheesesArr = ["mozzarella", "provolone", "asiago", "cheddar", "colby"];
var toppingsArr = ["mushrooms", "pepperoni", "sausage", "pineapple", "jalapeno", "ham", "spinach", "artichoke", "sardine :(", "chicken"];



function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza() {
    var pizza = {};
    var cheeseCount = Math.round(Math.random() * cheesesArr.length + 1);
    var toppingCount = Math.round(Math.random() * toppingsArr.length + 1);
    console.log("Cheeses: " + cheeseCount + "\nToppings: " + toppingCount);
    pizza.crustType = crustsArr[Math.round(Math.random() * crustsArr.length - 1)];
    pizza.sauceType = saucesArr[Math.round(Math.random() * saucesArr.length - 1)];
    pizza.cheeses = [];
    pizza.toppings = [];
    while(cheeseCount > 0){
        pizza.cheeses.push(cheesesArr[Math.round(Math.random() * cheesesArr.length - 1)]);
        cheeseCount--;
    }
    while(toppingCount > 0){
        pizza.toppings.push(toppingsArr[Math.round(Math.random() * toppingsArr.length - 1)]);
        toppingCount--;
    }

    return pizza;
}

pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
pizzaOven("thin crust", "marinara", ["mozzarella"], ["pepperoni", "jalapenos"]);//Ditka
pizzaOven("stuffed crust", "marinara", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(randomPizza());