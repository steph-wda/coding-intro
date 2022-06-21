console.log('Hello, Universe');

const firstName = 'Stephanie';
let age = 37;
const isCool = true;
let height = null;

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof height);

let x = 4;
let y = 10;
let z = 7 + 9;
let sum = x + y + z;
console.log(sum);

let string = "Hello, Universe";
let welcomeString = string + ' ' + firstName;
let welString = `Hello, Universe ${firstName}`
console.log(welcomeString);
console.log(welString);

if(age >= 21){
    console.log(`You can drink ${firstName}`);
}else {
    console.log("You've got some growing to do");
};

let score = 78;
let passing = 40;

if(score >= passing){
    console.log("You've passed!");
}else {
    console.log("You've failed.")
};