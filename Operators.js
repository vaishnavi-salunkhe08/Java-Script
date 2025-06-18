let a = 5;
let b = 2;

console.log("------------------------------------------------------------");
console.log("Arithmetic Operators");
console.log(`a = ${a}, b = ${b} , a + b = ${a + b}`);
console.log(`a = ${a}, b = ${b} , a - b = ${a - b}`);
console.log(`a = ${a}, b = ${b} , a * b = ${a * b}`);         
console.log(`a = ${a}, b = ${b} , a / b = ${a / b}`);
console.log(`a = ${a}, b = ${b} , a % b = ${a % b}`); // Modulus operator
console.log(`a = ${a}, b = ${b} , a ** b = ${a ** b}`); // Exponentiation operator
console.log("");
console.log("------------------------------------------------------------");
console.log("Unary Operators");
console.log(`a = ${a}, b = ${b} , ++a = ${++a}`); // Pre-increment
console.log(`a = ${a}, b = ${b} , --b = ${--b}`); // Pre-decrement
console.log(`a = ${a}, b = ${b} , a++ = ${a++}`); // Post-increment
console.log(`a = ${a}, b = ${b} , b-- = ${b--}`); // Post-decrement
console.log("");
console.log("------------------------------------------------------------");
console.log("Assignment Operators");    
let c = a += b; // Assignment
console.log(c);
console.log("");
console.log("------------------------------------------------------------");
console.log("Comparison Operators");
let d = a < b; // Less than
console.log(`a = ${a}, b = ${b} , a < b = ${d}`);
console.log(`a = ${a}, b = ${b} , a > b = ${a > b}`); // Greater than
console.log(`a = ${a}, b = ${b} , a <= b = ${a <= b}`); // Less than or equal to
console.log(`a = ${a}, b = ${b} , a >= b = ${a >= b}`); // Greater than or equal to
console.log(`a = ${a}, b = ${b} , a == b = ${a == b}`); // Equal to //compare value not type
console.log(`a = ${a}, b = ${b} , a === b = ${a === b}`); // Strict equal to //compare value and type
console.log(`a = ${a}, b = ${b} , a != b = ${a != b}`); // Not equal to
