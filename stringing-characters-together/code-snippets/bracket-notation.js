let input = "fake.email@launchcode.org";
let atIndex = input.indexOf("@");
let username = input.slice(0, atIndex);
console.log(username);
