// Array DESTRUCTING


let num = [4, 3, 2, 1]

let [a, b, c, d] = num;
console.log(c);
console.log(a);


// if i do not want to print  value of q then


let no = [4, 6, 7, 1]

let [p, , r, s] = no;

console.log(r);


//STRING


// let person = "Amisha Lodha is a coder".split(' ');

// let [x, y, z, w, u] = person;

// console.log(z, w, u);


let person = "Amisha Lodha is a coder".split(' ');

let [x, , ...z] = person;

console.log(z);