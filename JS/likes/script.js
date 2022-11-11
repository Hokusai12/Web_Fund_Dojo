var likeCounts = [document.querySelector(".like-count-1"), document.querySelector(".like-count-2"), document.querySelector(".like-count-3")];

function incrementLikes(index) {
    likeCounts[index].innerText++;
}

