let str = "hello wOrld";
let status1 = "upper";
if (status1.localeCompare("upper")) str = str.toUpperCase();
else str = str.toLowerCase();
console.log(str);
