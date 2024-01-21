// Now consider both if/else blocks together (keeping the added console.log lines). 
// Run the code and examine the output. 

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
// Is the program behaving as expected?

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');

   if (crewStatus) {
       console.log('Crew status cleared.');

       if (computerStatus === 'green') {
           console.log('Computer status cleared.');
           launchReady = true;
       } else {
           console.log('WARNING: Computer not ready!');
       }
   } else {
       console.log('WARNING: Crew not ready!');
   }
} else {
   console.log('WARNING: Insufficient fuel!');
}

console.log("launchReady = ", launchReady);

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}
