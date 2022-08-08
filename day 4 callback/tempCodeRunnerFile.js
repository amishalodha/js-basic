const x = () => {
    console.log('function of x');

}
const y = () => {
    console.log('function of y');
    callback()
}
y(x);