/* - Take random computer input as a number */
function compNumVal(num){
    const value = Math.floor(Math.random()*3)+1;
    return value
}
/* - Translate number into rock, paper, or scissors */
function getComputerChoice(choice){
    const number = compNumVal();
    if (number === 1){
        return "rock"
    } else if (number ===2){
        return 'paper'
    } else {
        return "scissors"
    }
}

/*
- Take user input as a string and convert string to match style choice for comparison */
function getPlayerChoice(choice){
    let userChoice = prompt("Please choose rock, paper, or scissors")
    return userChoice.toLowerCase();

}

/* Rock > Scissors, Scissors > Paper, Paper > Rock*/
function playRound(playerSelection, computerSelection){
    if (computerSelection ==="rock" && playerSelection ==="scissors"){
        let cWins = "Computer Wins! The computer chose " +computerSelection + " and you chose " + playerSelection
        return cWins
    } else if(computerSelection ==="scissors" && playerSelection ==="paper"){
        let cWins = "Computer Wins! The computer chose " +computerSelection + " and you chose " + playerSelection
        return cWins
    } else if(computerSelection === "paper" && playerSelection ==="rock"){
        let cWins = "Computer Wins! The computer chose " +computerSelection + " and you chose " + playerSelection
        return cWins
    } else if(computerSelection === playerSelection){
        let tie = "It's a tie! You both chose " + computerSelection
        return tie
    }else{
        pWins = "You Win! You chose " +playerSelection + " and the computer chose " + computerSelection
        return pWins
    }
}


/*
- Determine the winner of the game
- States user and computer choices, and declare winner of game
- Record winner by increasing record counter for winner by 1
- When 5 games have been played, the console will record outcomes
*/
function game(){
    let compare = playRound();
    let playerWins = 0;
    let computerWins = 0;
    let tieGame =0;
    for (let i =0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        let game = playRound(playerSelection, computerSelection)
        if (game.includes("Computer Wins")){
            ++computerWins
        }else if(game.includes("You Win")){
            ++playerWins
        }else{
            ++tieGame
        }
        console.log(game)
        
    }
    console.log("Player Wins: " +playerWins, "Computer wins: " + computerWins, "Tie Games: "+ tieGame)
}

game()
