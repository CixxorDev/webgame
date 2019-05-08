let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function maxPoints(){
    if (userScore == 5) {
        userScore = 0;
        computerScore = 0;
        const player = "Vous";
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_div.innerHTML = `${player} avez gagnez !`.fontcolor("green");
        setTimeout(function(){ document.location.href="loose.html"; }, 2000);
    }
    if (computerScore == 5){
        userScore = 0;
        computerScore = 0;
        const comp = "L'ordinateur";
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_div.innerHTML = `${comp} a gagné !`.fontcolor("red");
        setTimeout(function(){ document.location.href="loose.html"; }, 2000);
    }
}

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const rNumber = Math.floor(Math.random() * 3);
    return choices[rNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Pierre";
    if (letter === "p") return "Papier";
    return "Ciseaux";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallComputerWord = "comp".fontsize(3);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} bats ${convertToWord(computerChoice)}${smallComputerWord}. Vous gagnez !`;
    document.getElementById(userChoice).classList.add('green-win');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-win')}, 1000);
    maxPoints();
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallComputerWord = "comp".fontsize(3);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perds contre ${convertToWord(computerChoice)}${smallComputerWord}. Vous perdez !`;
    document.getElementById(userChoice).classList.add('red-lose');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-lose')}, 1000);
    maxPoints();
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3);
    const smallComputerWord = "comp".fontsize(3);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} contre ${convertToWord(computerChoice)}${smallComputerWord}. C'est égalité !`;
    document.getElementById(userChoice).classList.add('gray-draw');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-draw')}, 1000);
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        console.log("USER WINS.");
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        console.log("USER LOSES.");
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
        console.log("ITS A DRAW.");
        break;
    }
}

function main(){
rock_div.addEventListener('click', () => game("r"));

paper_div.addEventListener('click', () => game("p"));

scissors_div.addEventListener('click', () => game("s"));

}

main();