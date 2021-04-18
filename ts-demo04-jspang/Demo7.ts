/**
 * @description interface接口
 */

interface Person {
    name: string;
    age: number;
    height: number;
    weight?: number;
}

const person1 = {
    name: 'Tony',
    age: 18,
    height: 176,
    weight: 80
};

const screenResume = (person1: Person) => {
    const { name, age, height } = person1;
    age < 24 && height > 160 && console.log(name + '进入面试');
    age >= 24 || height <= 160 && console.log(name + '你被淘汰');
};

const getResume = (person1: Person) => {
    const { name, age, height } = person1;
    console.log('name:' + name);
    console.log('age:' + age);
    console.log('height:' + height);
    person1.weight && console.log('体重是:' + person1.weight);
}
screenResume(person1);
getResume(person1);