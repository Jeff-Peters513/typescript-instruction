import { Movie } from "../model/movie.class";
import { MovieService } from "../service/movie.service";

export class MovieListComponent {

}

let readline = require('readline-sync');

let movieSvc: MovieService = new MovieService();

let m1: Movie = new Movie();
m1.id = 1;
m1.title = "Star Wars Episode IV: A New Hope";
m1.year = 1977;
m1.rating = "PG";
m1.director = "George Lucas";

let m2: Movie = new Movie(2, "The Big Lebowski", 1998, "R", "Joel and Ethan Cohen");
movieSvc.add(m1);
movieSvc.add(m2);

console.log("Welcome to bmdb Typescript!");
console.log("----------------------------")

let command: string = "";
while(command != "exit") {
    console.log("Command Menu");
    console.log("-------------");
    console.log("list --list all movies");
    console.log("get --get single movie");
    console.log("add --a movie");
    console.log("del --delete movie");
    console.log("exit --exit the app\t");

    command = readline.question("Command?  ");

    switch (command) {
        case "list":
            console.log("Movie list: ");
            console.log("------------");
            movieSvc.list().forEach(movie => {
                console.log(movie.about());
                });
        break;
    
        case "get":
            console.log("Get a Movie by ID:");
            console.log("-------------------");
            let id: number = readline.questionInt("Movie ID?");
            let movie: Movie = movieSvc.get(id);
                console.log(movie.about());
        break;

        case "add":
            console.log("Add a Movie: ");
            console.log("------------");
            id = readline.questionInt("ID?");
            let title: string = readline.question("Title?");
            let year: number = readline.questionInt("year?");
            let rating: string = readline.question("Rating?");
            let director: string = readline.question("Director?");
            movie = new Movie(id, title, year, rating, director);
            movieSvc.add(movie);
        break;

        case "del":            
            console.log("Delete Movie: ");
            console.log("------------");
            id = readline.questionInt("ID?");
            movieSvc.delete(id);
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
