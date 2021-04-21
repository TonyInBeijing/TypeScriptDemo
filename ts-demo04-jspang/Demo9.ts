/*
 * @Author: Tony 
 * @Date: 2021-04-19 23:05:22 
 * @Last Modified by: Tony
 * @Last Modified time: 2021-04-21 22:05:30
 * @description constructor 构造函数
 */

class Person {
    constructor(public name: string) {
        this.name = name;
    }
}

class Teacher extends Person {
    constructor(public age: number) {
        super('Tony');
    }
}
const person = new Person('Tony');
const teacher = new Teacher(18);
console.log(person.name);
console.log(teacher);