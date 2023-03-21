const person = {
  name: 'Mahabub',
  email: 'info.m@gmail.com',
  address: 'zxy',
  phone: [123, 465, 456, 56],
  33: 'hello World',
  'job-type': 'web Developer'
};

// console.log('my name is' + person.name + '\n my email' + person.email);

const information = `My Name is ${person.name}
My Email is ${person.email}
// My numbers ${person.phone.map(n =>n)}
My numbers ${person.phone.map(n =>n).join(' ')}
`;
console.log(information)