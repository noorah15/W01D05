let num1 = 10;
let num2 = 15;
let num3 = 20;

console.log("num1 = " + num1);
console.log("num2 = " + num2);
console.log("num3 = " + num3);

if (num1 < num2) console.log("The larger value is num2");
else if (num1 > num2) console.log("The larger value is num1");
else console.log("num1 equal num2");

if (num1 % 2 == 0) console.log("num1 is even ");
else console.log("num1 is odd ");

let a = [4, 2, 8];
a.sort();
a.reverse();
console.log(a);

for (let i = 0; i <= 20; i++) console.log(i);

for (let i = 2; i <= 20; i += 2) console.log(i);

for (let i = 0; i < 5; i++) {
  let x = "";
  for (let j = 0; j <= i; j++) x += "*";
  console.log(x);
}

let x = 6;
let y = 3;

let min = Math.min(x, y);
for (let i = min; i >= 1; i--) {
  if (x % i == 0 && y % i == 0) {
    console.log(i);
    break;
  }
}
