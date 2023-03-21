const obj = {
  name: 'Somting',
  roll: 25
};

const json = JSON.stringify(obj)
console.log(json);

const objs = JSON.parse(json);
console.log(objs);

fetch('url')
.then(res => res.json())
.then(data => console.log(data));

const api = async () =>{
  const url = `sadf`
  try{
    const res = await fetch(url)
    const data = await res.json()


  }
catch(error){
  console.log(error)
}
}