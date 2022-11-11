function loadReport() {
    alert("Loading weather report...");
}

function hideCookieWindow() {
    document.querySelector(".cookie-popup").style.display = "none";
}

function changeUnits(unit) {
    //Get all elements with the high-and-low class
    var temps = document.querySelectorAll(".high-and-low");

    for(var i = 0; i < temps.length; i++){
        //Get the integer value from the temperature
        var high = parseInt(temps[i].children[0].innerText);
        var low = parseInt(temps[i].children[1].innerText);

        //Find if it's going to C or F
        if(unit.value == "\u00B0C"){
            //Convert to celsius
            high = Math.round((high - 32) * 0.5556);
            low = Math.round((low - 32) * 0.5556);

            //Store new data
            temps[i].children[0].innerText = high + "\u00B0";
            temps[i].children[1].innerText = low + "\u00B0";
        } else if (unit.value == "\u00B0F") {
            //Convert to fahrenheit
            high = Math.round((high * 1.8) + 32);
            low = Math.round((low * 1.8) + 32);

            //store new data
            temps[i].children[0].innerText = high + "\u00B0";
            temps[i].children[1].innerText = low + "\u00B0";
        }
    }
}