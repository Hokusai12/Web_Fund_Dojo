

function removeRequest(element, index) {
    if(document.querySelectorAll(".conn-req").length > 1){
        document.querySelectorAll(".conn-req")[index].remove();
    } else {
        document.querySelector(".conn-req").remove();
    }

    document.querySelector(".connection-requests .top-header .con-req-num").innerText--;
    
    if(element.getAttribute('src') == "imgs/icons/accept-circle.png"){
        document.querySelector(".connections .top-header .con-num").innerText++;
    }
}

function changeName() {
    document.querySelector(".profile-header h1").innerText = "Heisenberg";
}