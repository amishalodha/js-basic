function obj() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const name = ('Amisha')
            if (!name) {

                console.log('promise resolved');
                resolve();
            }

            else {
                console.log('promise not  resolved');
                reject();
            }

        }, 2000);
    })
}

obj()
    .then(function () {
        console.log("condition fulfilled");
    }).catch(function () {
        console.log("condition  not fulfilled")
    })

