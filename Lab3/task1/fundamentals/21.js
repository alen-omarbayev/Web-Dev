function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // we don't need to use the "else" estatement because if the first "if" statement won't be true, anyway function returns the statements after the "if"
        return confirm('Did parents allow you?');
    }
}

// 2

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    return true ? (age > 18) : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// 3

function min(a, b) {
    return a < b ? a : b;
}

// 4
function pow(a, b) {
    let result = 1;
    for(let i = 0; i < b; i++){
        result*=a;
    }
    return result;
}

