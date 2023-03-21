const arr = [1, 2, 3, 4, 5, 6];
for(let i = 0; i< arr.length; i++){
  console.log(arr[i])
};

for(let i of arr){
  console.log(i)
};

const obj = {
  name: 'x',
  number: '45',
  address: 'janina',
};

for(let i in obj){
  console.log(obj[i])
};

let i = 0;
while(i <arr.length){
  console.log(arr[i]);
  i++;
}