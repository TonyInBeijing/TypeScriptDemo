var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return Student;
}());
function greeter(user) {
    return "Hello" + user.firstName + ' ' + user.lastName;
}
var user = new Student('Tony', 'Yue');
// console.log(greeter(user));
document.body.innerHTML = greeter(user);
