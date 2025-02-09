let str = "Hello";

str.test = 5; // (*)

alert(str.test);

// 2
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

// 3
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
// 4
function readNumber() {
    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);

// 5
let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}

// 6
function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
// 7

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5