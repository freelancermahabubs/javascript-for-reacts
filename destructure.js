const num = [545, 868, 9, 6, 665];
// const fist = num[0];
// const second = num[1];

const [first, second, third] = num;
console.log(first, second, third);

const obj = {
  name: 'x',
  roll: '65',
  address: 'janna nai'
};

// const name = obj;
 
const {name, roll, address} = obj;
console.log(name, roll, address)
const numbers = [545, 868, 9, 6, 665];
const [a, b, ...rest] = numbers
console.log(a, b);
console.log(numbers)