// question #1
var currentYear = 2024;
var birthYear = 2006;
var age = currentYear - birthYear;
console.log(age);
// question #2
var length = 10; 
var width = 5;
var area = (length* width);
console.log(area);
// question #3
var PI= 3.14159 ;
var radius = 7; 
var area2 = (PI * radius * radius);
console.log(area2);
// question #4
var side = 4; 
const surfaceArea = ( 6 * side* side);
console.log(surfaceArea);

// question #4

var temperatureInFahrenheit = 98.6;
var temperatureInCelsius = 37;

var convertedToCelsius = (temperatureInFahrenheit - 32)*5/9;
var convertedToFahrenheit =(temperatureInCelsius *9/5) + 32;

console.log(convertedToCelsius);
console.log(convertedToFahrenheit);

// question #5

var totalSeconds = 125;
var seconds = totalSeconds % 60;           
var minutes = Math.floor(totalSeconds / 60); 
var result = (totalSeconds);
console.log(minutes "minutes" , seconds'seconds' );

// Q #1

var a = 2;
var b = ++a * 2; 
console.log(b);

// Q#2
var x = 5;
var y = x-- + 2;
console.log(y);

// Q#3
var x1 = 3;
var y1 = ++x1 + x1++ + ++x1;
console.log(y1);
// Q#4
var m = 2;
var n = ++m * m++ * --m;
console.log(n);
// Q#5
var a1= 3;
var b1 = 5;
var result = ++a1 + b1-- - a1++ + --b1;
console.log(result);
// Q#6
var a2 = 3;
var b2 = 5;
var result1 = ++a2 + b2-- - a2++ + --b2;
console.log(result1);

// Q#7
var a3 = 5;
var b3 = 3;
var c3 = 2;
var d3 = 7;
var result3 = ++a3 * (b3-- + c3) / --d3;
console.log(a3);
console.log(b3);
console.log(c3);
console.log(d3);
console.log(result3);

// Q#8
var m5 = 2;
var n5 = 3;
var o5 = 4;
var result4 = m++ * (--n5 + m5) / (o5-- - n5);
// m?, o?, n?, result?
console.log(m5);
console.log(o5);
console.log(n5);
console.log(result4);