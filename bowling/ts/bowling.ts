
let score:number = 0;
let ftScore: number = 0;
let stScore: number = 0;
let bowler1: string = "";
let bowler2: string = "";
let command: string = "";
let fpins: number[] = [];
let spins: number[] = [];

let readline = require('readline-sync');
console.log("");
console.log("");
console.log("Welcome to Virtual Competitve Bowling!")
console.log("                                       (O)           (O)");
console.log("                                       ||     (O)    ||");
console.log("  .----.                               ||     ||     ||");
console.log(" /   O O\\                            /  \\   ||    /  \\ ");
console.log(" '    O  '                           :    :  /  \\ :    : ");
console.log(" \\     /                            |    | :    : |    | ");
console.log("__`----'_____________________________\\__/__|    |_\\__/____ ");
console.log("                                            \\__/             ");

console.log("");
bowler1 = readline.question("Enter name for Bowler#1:  ");
console.log(""); 
bowler2 = readline.question("Enter name for Bowler#2:  ");
console.log(""); 

command = readline.question("Ready to bowl?!! (y/n):  "); 
console.log("");
while(command != "n") {
   for (let idx = 1; idx < 11; idx++) {
        score = getRandomNumberBetween(1, 10);
        fpins.push(score);
        ftScore += score;
    }       
    for (let idx = 1; idx < 11; idx++) {
        score = getRandomNumberBetween(1, 10);
        spins.push(score);
        stScore += score;
    }
   
    console.log("-----------------------");
    console.log(bowler1+ "  Bowled ");
    console.log(fpins + "  -|-  Total Score=> "+ ftScore);
    console.log("-----------------------");
    console.log(bowler2+ "  Bowled ");
    console.log(spins + "  -|-  Total Score=> "+ stScore);
    console.log("-----------------------");
    console.log("");
    
    if (fpins > spins){
        console.log(bowler1+ "  Won the Game!!");
    }else if (fpins < spins) {
        console.log(bowler2+ "  Won the Game!!");
    }else{
        console.log(bowler1+" "+bowler2 +" Tied!!!!");
    }
    
    //reset/empty scores and arrays    
    score = 0;
    ftScore = 0;
    stScore = 0;
    fpins.length = 0;
    spins.length = 0;
 
    console.log("");
    console.log("***********************");
    console.log("");
    command = readline.question("Wanna Bowl Again? (y/n):  ");
    
    }
console.log("");
console.log("Bye!");

function getRandomNumberBetween(min:number,max:number){
    return Math.floor(Math.random()*(max-min+1)+min);
}



