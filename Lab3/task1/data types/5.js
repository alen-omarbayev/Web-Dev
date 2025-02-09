function unique(arr) {
    return Array.from(new Set(arr));
}
// 2
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
// 3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more

// 4
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)
// 5
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Date object we'll study later
// 6
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum; // 650
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

// 7
function count(obj) {
    return Object.keys(obj).length;
}

// 8
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

// 9
function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}