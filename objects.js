const person = {
  name: 'Mahabub',
  email: 'info.m@gmail.com',
  address: 'zxy',
  phone: [123, 465],
  33: 'hello World',
  'job-type': 'web Developer'
};

// access obj 3way

// 1
const value1 = person.name;
console.log(value1);

// 2.
const value2 = person['email'];
console.log(value2);

// 3.
const prop = 'name';
const value3 = person[prop]
console.log(value3);

const value4 = person['33'];
console.log(value4);

const value5 = person["job-type"];
console.log(value5)

const obj = {};
obj.name = 'mahabub';

obj['address'] = 'Barina amer';

const propName = 'phone';
obj['propName'] = '65654';
console.log(obj);

const keys = Object.keys(obj);
console.log(keys);

const values = Object.values(obj);
console.log(values);

for(let i of keys){
  console.log(obj[i])
}