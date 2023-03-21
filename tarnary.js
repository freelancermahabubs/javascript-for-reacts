const x = 5;
const y = true;
if(x > 5){
  console.log("hello")
}
else{
  console.log('world')
};

(x > 5 && y === true) ? console.log('hello') : 'World';

const value = (x > 5 && y === true)? 'greater than 5' : 'not greater than 5';
console.log(value);

x > 5 ? console.log('greater'): x < 5 ? console.log('less') : console.log('equal');

// convert to number and convert to string 

let numbers = 55;
numbers = numbers+ '';
console.log(numbers);

// to convert number 
numbers = +numbers;
console.log(numbers);


