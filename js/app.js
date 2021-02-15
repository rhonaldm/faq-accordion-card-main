const container = document.querySelector(".container");



document.addEventListener("DOMContentLoaded", ()=>{
    container.addEventListener("click",showAnswer);
})

function showAnswer(e) {
    e.preventDefault();
    if(e.target.classList.contains("question-link")){
        e.target.classList.toggle("bold");
        const img = e.target.parentElement.children[1];
        img.classList.toggle("rotate");
        const answer = e.target.parentElement.parentElement.children[1];
        answer.classList.toggle("visibility");
    };
}

