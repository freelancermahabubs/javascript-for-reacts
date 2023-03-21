function func(x) {
return x * 2
};
console.log(func(3))

const func1 = x => x * 2;
console.log(func1(4));

const ar = (x, y) =>{
  const total = x + y + 10
  const grandTotal = total * 2;
  return grandTotal;
}