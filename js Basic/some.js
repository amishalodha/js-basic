const marks = [4, 5, 7, 9, 10, 3];

const output = marks.some(function (x) {
    return x < 5;
});

console.log(output);