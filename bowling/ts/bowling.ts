//let min: any;
//let max: any;
let score:number = 0;
let tScore: number = 0;

let readline = require('readline-sync');

console.log("Welcome to Virtual Bowling!")
console.log("----------------------------");
let command: string = "";
command = readline.question("Wanna Play? (y/n):  "); 

while(command != "n") {
   for (let idx = 1; idx < 10; idx++) {
        console.log("-----------------------");
        score = getRandomNumberBetween("1", "10")
        console.log("Bowl "+idx+ " scored  "+score);
        tScore += score;
        console.log("-----------------------");
   }
    console.log("***********************");
    console.log("Total score: "+tScore);  
    console.log("");
    tScore = 0;
    command = readline.question("Wanna Play? (y/n):  ");
}
console.log("");
console.log("Bye!");

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}