/*

Date started: sep 7th 5pm.
Date finished: sep 8th 9:06pm.
Aproxamate build time: 6+ hours.

To-Do:

1. Create a function that activates when a button is clicked

2. When function runs, it will run another function which will make the cpu choose a random choice

3. Decide who wins by using if else logic statements

4. Update scoreboard for user feedback

5. Update the dom to show what you and the cpu picked and whether or not you won, lost, or tied

*/

//Selecting all button elements and returning them in a nodelist
let btnList = document.querySelectorAll("button");

//This function chooses rock paper scissors randomly and returns the choice made
function randChoice() {
    let randNum = Math.floor(Math.random()* btnList.length);

    let choice = btnList[randNum].id;

    return choice;
}

//This function takes in the type of score you need to update and then selects that element by the class and updates its score in the dom showing the result to the player
function updateScore(typeOfScore){
    let el = document.getElementsByClassName(typeOfScore)[0];
    let score = parseInt(el.textContent) + 1;
    
    el.textContent = score;
}

//This function will update the bottom banner with the result of the game played by displaying what the player and cpu chose as well as if you won, lost, or tied
function showResult(playerChoice, cpuChoice, result){
    let el = document.getElementsByClassName("result")[0];
    
    el.textContent = "You chose " + playerChoice + "," + " The cpu chose " + cpuChoice + "." + " You " + result + "!";
}

//This for loop adds an event listener on every button in the dom for when the button is clicked and tells javascript to run a function that determines the winner
for (let i = 0; i < btnList.length; i++) {
    //The current button in the button array
    let btn = btnList[i];

    
    btn.addEventListener("click", 
    function determineWinner(button = btn){
        let playerChoice = btn.id;
        let cpuChoice = randChoice();
        let result;

        //Logic to decide who wins
        if(playerChoice === cpuChoice){
            updateScore('draws');
            result = "tied";
        } else {
            if (
                playerChoice === 'scissors' && cpuChoice !== 'rock' 
                || 
                playerChoice === 'rock' && cpuChoice !== 'paper' 
                || 
                playerChoice === 'paper' && cpuChoice !== 'scissors'
            ){
            updateScore('playerScore');
            result = "won";
            } else {
                updateScore('cpuScore');
                result = "lost";
            }
        }

        showResult(playerChoice, cpuChoice, result);
    });
}

