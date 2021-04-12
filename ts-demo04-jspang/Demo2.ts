/**
 * @description 静态类型
 */

// number
const count: number = 1;
// string
const myName: string = '123';
// null
const myNull: null = null;
// undefined
const myUndefined: undefined = undefined;
// boolean
const myBoolean: boolean = true;
// void
const myVoid: () => void = () => { console.log(123); };
// symbol
const mySymbol: symbol = Symbol('123');
// 对象类型
const myObj: {
    name: string
} = {
    name: '123'
};
// 数组类型
const myArr: string[] = ['123'];
class Person { };
const person1: Person = new Person();
const myFunc: () => string = () => 'myFunc';

// 接口
interface Xiaojiejie {
    uname: string,
    age: number
}
const xiaohong: Xiaojiejie = {
    uname: 'xiaohong',
    age: 18
};
console.log(xiaohong);