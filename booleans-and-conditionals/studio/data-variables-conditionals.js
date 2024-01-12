// Initialize Variables below

let date =  "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg =74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let clear = true;
let unclear= false;
let weatherStatus = clear;
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7){
    console.log("Insufficient crew count.");
} else {
    console.log("All crew are onboard.");
}

// add logic below to verify all astronauts are ready

if (astronautStatus){
    console.log("All crew members ready.");
} else {
    console.log("Crew members not ready.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg > maximumMassLimit){
    console.log("ALERT: Maximum mass reached.");
} else {
    console.log("Stable mass.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius > -150) {
    console.log("ALERT: Fuel temperature high.");
} else if (fuelTempCelsius < -300) {
    console.log("ALERT: Fuel temperature low.");
} else {
    console.log("Fuel temperature stable.");
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel === 100){
    console.log("Fuel level at 100%.");
} else {
    console.log("WARNING: Fuel level below 100%.");
}

// add logic below to verify the weather status is clear

if (weatherStatus === true){
    console.log("Weather status clear.");
} else {
    console.log("ALERT: Weather not clear for launch.");
}

// Verify shuttle launch can proceed based on above conditions
if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg <= maximumMassLimit && fuelTempCelsius >= -300 && fuelTempCelsius <= -150 && fuelLevel === 100 && weatherStatus) {
    console.log("All systems go! Initiating launch sequence.")
    console.log("-----------------------------------------");
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg + " kg");
    console.log("Fuel Mass: " + fuelMassKg + " kg");
    console.log("Total Mass: " + totalMassKg + " kg");
    console.log("Fuel temperature: " + fuelTempCelsius + " °C");
    console.log("Weather status: " + weatherStatus);
    console.log("-----------------------------------------");
    console.log("Shuttle cleared for takeoff! Have a safe flight.")
} else {
    console.log("Shuttle not cleared for takeoff.");
}

