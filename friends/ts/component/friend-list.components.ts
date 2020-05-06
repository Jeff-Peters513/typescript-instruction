import { Friend } from "../model/friend.class";


export class FriendListComponent {

}

let f1: Friend = new Friend("Jason Herbot", 45, "jason.Herbot@yahoo.com", true);
let f2: Friend = new Friend("George Hiben", 57, "George.Hiben@yahoo.com", false);
let f3: Friend = new Friend("Mollie Dwyer", 44, "Mollie.Dwyer@yahoo.com", true);
let f4: Friend = new Friend("Patrick Dwyer", 49, "null", false);
let f5: Friend = new Friend("Jared Johnson", 46, "Jdude@gmail.com", false);

let friends: Array<Friend> = [f1, f2, f3, f4, f5];

console.log("Name\t     Age\tEmail\t\tBFF")
for (let friend of friends) {
    console.log(friend.about());
}
