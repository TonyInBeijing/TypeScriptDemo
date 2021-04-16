/**
 * @description 函数参数定义和返回类型定义
 */

function getTotal1(a: number, b: number): number {
    return a + b;
}
const res: number = getTotal1(1, 2);

function sayHello(): void {
    console.log('hello!');
}

function errorHandler(): never {
    throw new Error();
    console.log('hello');
}

function add({ a, b }: { a: number, b: number }) {
    return a + b;
}

const total1 = add({ a: 1, b: 2 });

function getNumber({ one }: { one: number }) {
    return one;
}

const one = getNumber({ one: 1 });