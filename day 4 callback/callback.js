function obj1() {
    console.log(' callback appered');
}

function obj2() {
    console.log(' callback disappered');
    setTimeout(() => {
        console.log('callback');
    }, 3000);
}

obj1();
obj2();
