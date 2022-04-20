interface User {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

class UserAccount {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName: string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location =  location;
  }
}

const user1: User = new UserAccount("Alex", "Murphy", 30, "Detroit");
const user2: User = new UserAccount("John", "Constantine", 32, "Los Angeles");

let values: any[] = [user1, user2];


