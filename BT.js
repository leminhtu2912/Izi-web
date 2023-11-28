// Arrow function, template literal
const greet = (name) => `Hello, ${name}!`;

// Destructuring assignments
const person = { name: 'Ngô Quang Trường', age: 21, country: 'VN' };
const { name, age, country } = person;

console.log(greet(name));
console.log(`Age: ${age}`);
console.log(`Country: ${country}`);