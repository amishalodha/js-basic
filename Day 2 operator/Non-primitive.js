//NON PRIMITIVE TYPE



// let obj1 = {
//     name: 'Amisha',
//     age: 12
// };

// let obj2 = obj1;

// console.log(obj1);

// console.log(obj2);

// obj2.name = 'Anjali';

// console.log(obj1);

// console.log(obj2);


//we are using the JSON stringify method 




let obj1 = {
    name: 'Amisha',
    age: 12
}

let obj2 =
    JSON.parse(
        JSON.stringify(obj1));


obj2.name = 'Akshita';



console.log(obj1);

console.log(obj2);
