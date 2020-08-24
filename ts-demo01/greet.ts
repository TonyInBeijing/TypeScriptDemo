class Student {
  fullName: string;
  constructor(public firstName, public lastName) {
    this.fullName = firstName + '' + lastName;
  }
}

interface Person {
  firstName: string,
  lastName: string,
}

function greeter(user: Person): string {
  return "Hello" + user.firstName + ' ' + user.lastName;
}
let user = new Student('Tony', 'Yue');
// console.log(greeter(user));
document.body.innerHTML = greeter(user);

