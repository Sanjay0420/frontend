// number

let a= 23;
console.log(a)
//string
let a1= "hello";
console.log(a1)
// array
let k=[12,23,43];
console.log(k[2]);
let k1=[12,23,43];
console.log(k1[23]);
k[2]=22; 
console.log(k);
//Shallow copy
let y=[23,56,87,3];
let x=y;
y[1]=43;
console.log(x[1]);
console.log(y[1]);
console.log(y);

//object (key value pair) -> maths -> 90
let bio= {name:"sanjay",age:"21",cousre:"fullstack"};
console.log(bio);
console.log(bio["name"]);
bio["name"]="manoj";
console.log(bio);
bio["country"] = "india";
console.log(bio);
Object.seal(bio);
bio["height"] =5.1;
Object.freeze(bio);
bio["name"] = "sanjay"
console.log(bio);
console.log(Object.keys(bio));
console.log(Object.values(bio));