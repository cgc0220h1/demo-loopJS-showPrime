function showSpecialNum() {
    let count = 1;
    let numbers = +document.getElementById('num-input').value;
    let result = [];
    let index = 2;
    for (index; count <= numbers;) {
        if (checkPrime(index)) {
            result.push(index);
            count++;
        }
        index++;
    }
    document.getElementById('num-display').innerHTML = result.join(", ");
}

function checkPrime(number) {
    for (let i = 2; i <= number/Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}