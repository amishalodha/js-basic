

const obj1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        const rollno = [1, 2, 3, 4];

        resolve(rollno);

        reject('throwing an error ');
    }, 3000);

});

// obj1.then((rollno) => {
//     console.log(rollno);
// }).catch((error) => {
//     console.log(error);
// });

async function Data() {
    const rollnodata = await obj1;
    console.log(rollnodata);

}

Data();