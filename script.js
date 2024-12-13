let username = prompt('Welcome to Bear Hunter. Please type your name');
const choices = ['bear', 'ninja', 'hunter'];

let player = `${username}`;
// Print out welcome text
alert('Hi ' + player + ' Let\'s Play!!');


let choose;



const playAgainbtn = document.getElementById('reset');

function playAgain() {
    // Reset the win counters
    playerWins = 0;
    cpuWins = 0;

    // Reset the UI elements
    document.getElementById("result").innerHTML = "";
    document.getElementById("u-picked").innerHTML = "";
    document.getElementById("c-picked").innerHTML = "";

    // Reset the win labels
    const playerWinsLbl = document.getElementById('playerwins');
    const cpuWinsLbl = document.getElementById('cpuwins');
    
    playerWinsLbl.textContent = `Your Wins: ${playerWins}`;
    cpuWinsLbl.textContent = `Computer Wins: ${cpuWins}`;

    console.log("Game has been reset!");
}

playAgainbtn.addEventListener("click", playAgain);

const playerWinsLbl = document.getElementById('playerwins');
const cpuWinsLbl = document.getElementById('cpuwins');

  
let playerWins = 0;
let cpuWins = 0;

  

const bearBtn = document.getElementById('bear');
const ninjaBtn = document.getElementById('ninja');
const hunterBtn = document.getElementById('hunter');

bearBtn.addEventListener("click", function(){
    choose = 'bear';
    playGame();
});


ninjaBtn.addEventListener("click", function(){
choose = 'ninja';
playGame();
});


hunterBtn.addEventListener("click", function(){
choose = 'bear';
playGame();
});



function playGame() {

   

    let cpuChoice = Math.floor(Math.random() * 3);
    let computer = choices[cpuChoice];

    let result = "";

    if (choose === computer) {
        result = "tie";
    } else if (
        (choose === "bear" && computer === "ninja") ||
        (choose === "ninja" && computer === "hunter") ||
        (choose === "hunter" && computer === "bear")
    ) {
        result = "user";
        playerWins ++;
       
    } else {
        result = "computer";
        cpuWins ++;
    }


    
    playerWinsLbl.textContent = `Your Wins: ${playerWins}`;
    cpuWinsLbl.textContent = `Computer Wins: ${cpuWins}`;

            document.getElementById("u-picked").innerHTML = player + ", You picked " + choose + "!";
            document.getElementById("c-picked").innerHTML = `The Computer Picked ${computer}`;

            switch (result) {
                case "tie":
                    console.log("Tie!!");
                    document.getElementById("result").innerHTML = "Tie!!";
                    break;
                case "user":
                    console.log("You win!!");
                    document.getElementById("result").innerHTML = "You win!!";

                   
                    break;
                case "computer":
                    console.log("Computer wins!!");
                    document.getElementById("result").innerHTML = "Computer Wins!!";
                    
                    break;

                   
                default:
                    console.log("Something went wrong");
                    document.getElementById("result").innerHTML = "Something went wrong";
                    break;
            }


}

