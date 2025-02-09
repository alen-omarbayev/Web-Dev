let i = 0;
while (++i < 5) alert( i );

i = 0;
while (i++ < 5) alert( i );

for (let i = 0; i < 5; ++i) alert( i );
for (let i = 0; i < 5; i++) alert( i );

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);