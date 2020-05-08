let min: number;
let max: number; 

let readline = require('readline-sync');

console.log("Welcome to Virtual Bowling!")
console.log("----------------------------");

let command: string = "";
command = readline.question("Command?  ");


while(command != "y") {
    console.log("Command Menu");
    console.log("-------------");
    console.log("list --list all movies");
    console.log("get --get single movie");
    console.log("add --a movie");
    console.log("del --delete movie");
    console.log("exit --exit the app\t");

    



getRandomNumberBetween(1,10);



function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}