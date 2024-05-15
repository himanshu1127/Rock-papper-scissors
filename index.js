function getComputerChoice(){
    const choice=Math.random();
    if(choice <=0.33){
        return "rock";
    }
    else if(choice <=0.66){
        return "papper";
    }
    else if (choice <=1){
        return "scissors";
    }
}

function getHumanChoice(){
   
    let choice =prompt()
    if(choice =="rock" || choice == "papper" || choice == "scissors"){
        return choice;
    }


}




let computerScore=0;
let humanScore=0;
function playRound(humanChoice,computerChoice){
    if(humanChoice =="rock" && computerChoice =="papper"){
      computerScore++
      console.log(computerScore,humanScore,computerChoice,humanChoice)
    }
    else if(humanChoice=="papper" && computerChoice=="scissors"){
      computerScore++
      console.log(computerScore,humanScore,computerChoice,humanChoice)
    }
    else if(humanChoice== "scissors" && computerChoice=="rock"){
      computerScore++
      console.log(computerScore,humanScore,computerChoice,humanChoice)
    }
    else if(humanChoice == computerChoice){
      console.log("draw")
    }
    else{
      humanScore++
      console.log(computerScore,humanScore,computerChoice,humanChoice)
    }
}
function playGame(){

   

    
    for(i=0;i<=4;i++){
        let humanSelection=getHumanChoice();
    let computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection)
    }
    if(humanScore>computerScore){
        computerScore=0;
        humanScore=0;
        console.log("you win")
    }
    else{
        computerScore=0;
        humanScore=0;
        console.log("you loose")
    }
}
    playGame()