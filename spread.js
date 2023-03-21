const numbers = [56, 65, 89, 56, 87];

// const newNumber = numbers;
// newNumber.push(34);
// console.log(numbers);
// console.log(newNumber)

const newNumber = [...numbers, 100];
newNumber.push(56);
console.log(newNumber)
console.log(numbers);

const person = {
  name: 'Mahabub',
  address: 'Netrokona'
};

const newPerson = {...person};
newPerson.phone = '56656',
console.log(person);
console.log(newPerson)