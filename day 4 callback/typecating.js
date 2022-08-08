

const num = 7;

console.log(num, typeof num);
// output : 7 number

//No.to string TYPEOF

const num1 = String(7);
console.log(num1, typeof num1);
// output  : 7 string

//No in string format

const no = "123";
console.log(no, typeof no);
// output : 123 string

//convert string to no

const num3 = Number("123");
console.log(num3, typeof num3);
// output : 123 number


let x
console.log(x, typeof x);

x = 5
console.log(x, typeof x); // 5 number

x = x - 2
console.log(x, typeof x); // 3 number

x = !x

console.log(x, typeof x); // false boolean

x = 0
console.log(Boolean(0)); // false

x = 6
console.log(Boolean(6)); // false

