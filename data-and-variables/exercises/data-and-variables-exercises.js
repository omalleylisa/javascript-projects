// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let kilometersToMars = 225000000;
let kilometersToMoon = 384400;
const milesPerKilometer = 0.621;

console.log(typeof 'Determination');
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof 0.621);

let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");