// 1.Write an arrow function that takes two parameters, a and b, and returns their sum.

let add = (a, b) => `The sum of ${a} and ${b} is ${a+b}`;
console.log(add(10,20));


// 2.Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”

let msg = Name => `Hello ${Name}`;
console.log(msg("Krishna"));


// 3.Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.
let evenNumber = n => {
    if(n%2==0)
        return `${n} is a Even number`
    else
        return `${n} is not a Even number`
}
console.log(evenNumber(10));


// 4.Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.
let number = num => {
    if(num>10)
        return `${num} is greater than 10.`;
    else if(num<10)
        return `${num} is less than 10.`;
    else
        return `${num} is equal to 10.`;
}
console.log(number(12));

// 5.Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”
let length = (str1, str2) => {
    if(str1.length>str2.length)
        return "The String one is longer.";
    else if(str1.length<str2.length)
        return "The String two is longer.";
    else
        return "Both Strings are having Equal length.";

}
console.log(length("Java", "Python"))