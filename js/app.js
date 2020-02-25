function showSpecialNum() {
    let count = 1;
    let numbers = +document.getElementById('num-input').value;
    let result = '';
    let index = 1;
    for (index; count <= numbers;) {
        if (checkPrime(index)) {
            result = result + index + ", ";
            count++;
        }
        index++;
    }
    document.getElementById('num-display').innerHTML = result;
}

function checkPrime(number) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
