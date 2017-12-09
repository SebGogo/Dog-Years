// Setting my age
const myAge = 34;

// The first two human years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5

// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
laterYears = myAge - 2;

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
laterYears *= 4;

// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
myAgeInDogYears = earlyYears + laterYears;

// Create a variable called myName and store your name as a string
myName = 'Sebastian';
myName.toLowerCase();

// Use string interpolation to display the value in the following sentence
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
