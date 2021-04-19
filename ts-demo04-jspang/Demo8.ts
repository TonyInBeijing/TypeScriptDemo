/**
 * @description class类&继承&访问类型
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
// console.log(myStudent.sayHello());
// console.log(myCollegeStudent.sayHello());

// public:类的内部和类的外部都可以调用
// private: 只允许类的内部使用
// protected: 只允许在类的内部使用,继承时可以外部使用
class Teacher {
    public name: string;
    private _name: string;
    protected _name2: string;
    public sayHello() {
        console.log(this.name);
    }
}
class CollegeTeacher extends Teacher {
    public sayBye() {
        console.log(this._name2);
    }
}
const teacher = new Teacher();
teacher.name = 'Tony';
console.log(teacher.name);