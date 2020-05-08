import { ActorService } from "../service/actor.service";
import { Actor } from "../model/actor.class";

export class ActorListComponent {

}

let readline = require('readline-sync');

let actorSvc: ActorService = new ActorService();

let a1: Actor = new Actor(1, "Jeremy", "Irons", "Male", "1948-09-19");
let a2: Actor = new Actor(2, "Harrsion", "Ford","Male","1942-07-13");
actorSvc.add(a1);
actorSvc.add(a2);

console.log("Welcome to bmdb Typescript!");
console.log("----------------------------");

let command: string ="";
while (command != "exit") {
    console.log("Command Menu");
    console.log("-------------");
    console.log("list --list all actors");
    console.log("get --get single actor");
    console.log("add --an actor");
    console.log("del --delete an actor");
    console.log("exit --exit the app\t");

    command = readline.question("Command?:  ");

    switch (command) {
        case "list":
            console.log("Actor list: ");
            console.log("------------");
            actorSvc.list().forEach(actor => {
                console.log(actor.about());
                });
        break;
    
        case "get":
            console.log("Get a Actor by ID:");
            console.log("-------------------");
            let id: number = readline.questionInt("Actor ID?");
            let actor: Actor = actorSvc.get(id);
                console.log(actor.about());
        break;

        case "add":
            console.log("Add an Actor: ");
            console.log("------------");
            id = readline.questionInt("ID?");
            let firstName: string = readline.question("First Name?");
            let lastName: string = readline.question("Last Name?");
            let gender: string = readline.question("Gender?");
            let birthday: string = readline.question("Birthday yyyy-mm-dd?");
            actor = new Actor(id, firstName, lastName, gender, birthday);
            actorSvc.add(actor);
        break;

        case "del":            
            console.log("Delete Actor: ");
            console.log("------------");
            id = readline.questionInt("Actor ID?");
            actorSvc.delete(id);
        break;
        
        case "exit":  
        console.log("*********")          
        console.log("Bye");
         break;


        default:
            console.log("Invalid command, try again.")
            break;
    }
    
}