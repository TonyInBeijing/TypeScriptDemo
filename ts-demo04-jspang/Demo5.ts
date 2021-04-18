/**
 * @description 数组定义
 */

const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ['1', '2', '3'];
const undefinedArray: undefined[] = [undefined, undefined, undefined];
const multiArray: (string | number)[] = [1, '1', 2, '2'];
// type alias 类型别名
type Person1 = { name: string, age: number };
const objectArray1: { name: string, age: number }[] = [{ name: '1', age: 1 }, { name: '2', age: 2 }, { name: '3', age: 3 }];
class Person2 {
    name: string;
    age: number;
}
const objectArray2: Person2[] = [{ name: '1', age: 1 }, { name: '2', age: 2 }, { name: '3', age: 3 }];