function showSpecialNum() {
    let count = 0;
    let numbers = +document.getElementById('num-input').value;
    let result = "";
    while (count < numbers) {
        if (checkPrime(count)) {
            result = result + count + ", ";
            count++;
        }
        count++;
    }
    document.getElementById('num-display').innerHTML = result;
}

function checkMod(number) {
    return (number % 2 === 0);
}

function checkPrime(number) {
    let index = 2;
    if (number === 2 || number === 3) {
        return true;
    } else {
        while (index <= Math.sqrt(number)) {
            if (number % index === 0) {
                return false;
            }
            index = index + 1;
        }
    }
    return true;
}
