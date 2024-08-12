let button = document.querySelector("#button");
let buttonClick = button.addEventListener("click", Clicked);

function Clicked() {
    let palinPrompt = prompt("Type in the word");
    let palinCase = palinPrompt.toLowerCase();
    let palinBlank = palinCase. replace(/\s+/g, '');
  
    let palinPunct = palinBlank.replace(/[^\w\s]|_/g, '');

    let palinSplit =  palinPunct.split("");
    let palinReverse = palinSplit.reverse();
    let palinJoin = palinReverse.join("");    
    let palinAnswer = document.querySelector("#Answer");

    if(palinPunct == palinJoin) {
        palinAnswer.textContent=`${palinPrompt} is a Palindrome`;
    } else {
        palinAnswer.textContent=`${palinPrompt} is not  a Palindrome`;
    }

}