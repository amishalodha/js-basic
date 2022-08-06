let person = {
    name: 'anisha',
    age: 22,
    dep: 'IT'
};

let address = {
    state: 'Rajasthan',
    City: 'Bhilwara'
};

let output = { ...person, ...address }

console.log(output);


// if we want to add any value then 

let addresss = {
    state: 'Rajasthan',
    City: 'Kota'
};

let value = { country: 'India', ...addresss }

console.log(value);
