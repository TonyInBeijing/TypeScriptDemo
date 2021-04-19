/**
 * @description interface接口
 */

interface Person {
    name: string;
    age: number;
    height: number;
    weight?: number;
    [propname: string]: any;
    say(): string;
}

interface Teacher extends Person {
    teach(): string;
}

const person1 = {
    name: 'Tony',
    age: 18,
    height: 176,
    weight: 80,
    sex: '男',
    say() {
        return 'hello';
    },
    teach() {
        return 'teach';
    }
};

class PersonClass implements Person {
    name: 'Jack';
    age: 18;
    height: 180;
    weight: 90;
    say() {
        return 'hi';
    }
}

const screenResume = (person1: Person) => {
    const { name, age, height } = person1;
    age < 24 && height > 160 && console.log(name + '进入面试');
    age >= 24 || height <= 160 && console.log(name + '你被淘汰');
};

const getResume = (person1: Teacher) => {
    const { name, age, height } = person1;
    console.log('name:' + name);
    console.log('age:' + age);
    console.log('height:' + height);
    person1.weight && console.log('体重是:' + person1.weight);
    person1.sex && console.log('性别是:', person1.sex);
    person1.say && console.log(person1.say());
}
// screenResume(person1);
// getResume(person1);