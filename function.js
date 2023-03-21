// function with no perameters and no return type 
function myFunk(){
  console.log('hello World')
};
myFunk()

// 2. function with perameter and no return type 
function myFunk1(x, y){
  console.log(x + y)
};

myFunk1(12, 45);

// 3. function with peramerters and return type 
function myFunk2(x, y){
 return(x + y)
};

const result = myFunk2(12, 45);
console.log(result);

// 4. function with no perameter but return type 

function myFunk3(){
const arr = [12, 45, 87];
return arr
 };
 
 const result3 = myFunk2();
 console.log(result3)