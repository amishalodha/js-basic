
const obj1 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve('New Promise is resolved');
    }, 3000);

});

obj1.then(function (data) {

    console.log({ data });
    return [1, 2, 5, , 6];

}).then(function (second) {

    console.log({ second });
}).catch(function (error) {
    console.log(error);
})
