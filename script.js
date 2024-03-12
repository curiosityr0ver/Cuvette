let humanWins = parseInt(localStorage.getItem('humanWins')) || 0;
let computerWins = parseInt(localStorage.getItem('computerWins')) || 0;
var victoryScreen = {
    header: "ITS A TIE !!",
    footer: ""
};
updateScore();
// console.log(humanWins, computerWins);
let showRule = false;
let showNext = false;
function toggleRules() {
    showRule = !showRule;
    document.getElementById('rules-content').style.display = showRule ? 'flex' : 'none';
}
function toggleNext() {
    document.getElementById('game-container').style.display = showNext ? 'flex' : 'none';
    document.getElementById('controls').style.display = showNext ? 'block' : 'none';
    document.getElementById('result').style.display = showNext ? 'flex' : 'none';
    document.getElementById('victory-screen').style.display = !showNext ? 'flex' : 'none';
    document.getElementById('victory-screen-text-1').innerText = victoryScreen.header;
    document.getElementById('victory-screen-text-2').innerText = victoryScreen.footer;
    document.getElementById('play-again').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
    showNext = true;
}


function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById('result').innerHTML = result;
    document.getElementById('result').style.display = 'block';
    document.getElementById('controls').style.display = 'none';
    document.getElementById('play-again').style.display = 'block';


    if (result.includes('WIN')) {
        document.getElementById('rule-row-victory').style.display = 'flex';
        document.getElementById('rule-row-normal').style.display = 'none';

        humanWins++;
        victoryScreen.header = "HURRAY !!";
        victoryScreen.footer = "YOU WON THE GAME";
    } else if (result.includes('LOST')) {
        computerWins++;
        victoryScreen.header = "SORRY !!";
        victoryScreen.footer = "YOU LOST THE GAME";
    }
    updateScore();
}

function determineWinner(player, computer) {
    if (player === computer) {
        document.getElementById('next-button').style.display = 'block';
        return `<div class="result flex"><div><button class="resultButton red"><img src= \"./images/${player}.png\" class="icon"></button></div><div class="flex col"><div class="h1">TIE UP</div></div><div><button class="resultButton blue"><img src= \"./images/${computer}.png\" class="icon"></button></div></div>`;
    } else if ((player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')) {
        return `<div class="result flex"><div><button class="resultButton red"><img src= \"./images/${player}.png\" class="icon"></button></div><div class="flex col"><center><div class="h1">YOU WIN</div><div> AGAINST PC</div></center></div><div><button class="resultButton blue"><img src= \"./images/${computer}.png\" class="icon"></button></div></div>`;
    } else {
        return `<div class="result flex"><div><button class="resultButton red"><img src= \"./images/${player}.png\" class="icon"></button></div><div class="flex col"><center><div class="h1">YOU LOST</div><div> AGAINST PC</div></center></div><div><button class="resultButton blue"><img src= \"./images/${computer}.png\" class="icon"></button></div></div>`;
    }
}

function resetGame() {
    if (showNext) window.location.reload();
    document.getElementById('result').style.display = 'none';
    document.getElementById('controls').style.display = 'grid';
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('rule-row-normal').style.display = 'block';
    document.getElementById('rule-row-victory').style.display = 'none';
}

function updateScore() {
    localStorage.setItem('humanWins', humanWins);
    localStorage.setItem('computerWins', computerWins);
    document.getElementById('human-wins').innerText = humanWins;
    document.getElementById('computer-wins').innerText = computerWins;
}
