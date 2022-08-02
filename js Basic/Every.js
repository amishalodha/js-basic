function checkAdult(age) {
    return age >= 18;
}


const age = [34, 23, 20, 26, 12];



let check = age.every(age => age >= 18); // false
console.log(check);