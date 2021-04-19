/**
 * @description class 类
 */
class Student {
    content = 'student';
    sayHello() {
        return this.content;
    }
}
class CollegeStudent extends Student {
    collegeContent = 'college student';
    sayHello() {
        return super.sayHello();
    }
    sayBye() {
        return this.collegeContent;
    }
}
const myStudent = new Student();
const myCollegeStudent = new CollegeStudent();
console.log(myStudent.sayHello());
console.log(myCollegeStudent.sayHello());