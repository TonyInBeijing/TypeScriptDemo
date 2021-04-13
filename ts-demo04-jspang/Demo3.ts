/**
 * @description 类型推断&类型注解
 */

/**
 * 如果ts可以推断类型则不需要加注解
 * 如果不能推断则需要加注解
 */
let myCount: number;
myCount = 123;
let countInference = 123;

function getTotal(a: number, b: number) {
    return a + b;
}
const total = getTotal(1, 2); // 可以推断类型，无需加注解

const person = {
    name: 'xx',
    age: 18
}; // 可以推断