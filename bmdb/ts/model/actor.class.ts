export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthday: string;

    constructor(id: number = 0, firstName: string ="", lastName:string = "",
                 gender: string="", birthday: string = "" ){
                    this.id=id;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.gender = gender;
                    this.birthday = birthday;
                 }
    about(): void {
        console.log(`${this.id}, First and last name :${this.firstName}" "${this.lastName}, 
            Gender ${this.gender}, Birthday ${this.birthday}`);

    }




}