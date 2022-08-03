
let obj1 = {
    name: 'Amisha',
    age: 22,
    getName: function () {
        return this.name;

    }
}

let obj2 = object.assign({}, obj1);

console.log(obj1);

console.log(obj2);

obj2.name = 'Daksh';
console.log(obj1);

console.log(obj2);