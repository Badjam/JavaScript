function saySomething() {
    console.log('--------');
    console.log('David');
    console.log('----------');
}
saySomething();


function calculateTaxt(amount) {
    let result = amount * 0.085;
    return result;
}

let tax = calculateTaxt(100);
console.log(tax);