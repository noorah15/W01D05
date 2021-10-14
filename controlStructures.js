let num1 = 100;
let num2 = 3;
let num3 = 20;

console.log("num1 = " + num1);
console.log("num2 = " + num2);
console.log("num3 = " + num3);

///////////////////////////////////////////////////////

if (num1 < num2) console.log("The larger value is num2");
else if (num1 > num2) console.log("The larger value is num1");
else console.log("num1 equal num2");

//////////////////////////////////////////////////////

if (num1 % 2 == 0) console.log("num1 is even ");
else console.log("num1 is odd ");

///////////////////////////////////////////////////////

let m1;
let m2;
let m3;

if (num2 > num1 && num2 > num3) m1 = num2;
else if (num1 > num2 && num1 > num3) m1 = num1;
else m1 = num3;

if (num2 < num1 && num2 < num3) m3 = num2;
else if (num1 < num2 && num1 < num3) m3 = num1;
else m3 = num3;

if (num1 != m1 && num1 != m3) m2 = num1;
else if (num2 != m1 && num2 != m3) m2 = num2;
else m2 = num3;
console.log(m1 + " " + m2 + " " + m3);

///////////////////////////////////////////////////

let amount = -120;

if (isNaN(amount)) console.log("Please enter a number");
else if (amount < 0) console.log("Please enter a positive number");
else console.log("The amount is ", amount);

/////////////////////////////////////////////////////

let userName = "Noorah15";
let password = "12345678";

if (userName.length > 6 && password.length >= 8)
  console.log("login successful");
else console.log("login failed.");

////////////////////////////////////////////////////

for (let i = 0; i <= 20; i++) console.log(i);

///////////////////////////////////////////////////

for (let i = 20; i >= 0; i--) console.log(i);

///////////////////////////////////////////////////

for (let i = 2; i <= 20; i += 2) console.log(i);
///////////////////////////////////////////////////

let startRange = 5;
let endRange = 8;
let range = "";
for (let i = startRange; i <= endRange; i++) {
  if (i === endRange) range += i;
  else range += i + ", ";
}

console.log(range);

///////////////////////////////////////////////////
for (let i = 0; i < 5; i++) {
  let x = "";
  for (let j = 0; j <= i; j++) x += "*";
  console.log(x);
}

/////////////////////////////////////////////////////

let x = 10;
let y = 5;

let min = Math.min(x, y);
for (let i = min; i >= 1; i--) {
  if (x % i == 0 && y % i == 0) {
    console.log(i);
    break;
  }
}
