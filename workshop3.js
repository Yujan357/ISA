// area of triangle
function area(base,height){
    return (1/2*base*height)
}
var Tri=area(10,10)
console.log(Tri)

// Return something to me
var giveMeSomething = function(a){
    console.log("something ",a);
}
 giveMeSomething("is better than nothing")

//  Basketball points 
var points = function(a,b){
    console.log((2*a)+(3*b));
    document.write((2*a)+(3*b));
}
 points(1,1);
 points(7,5);
 points(38,8);

//  Less than 100
var lessthan100 = function(a,b){
    if (a+b < 100) {
    console.log(true);}
    else {
    console.log(false);}
 }
 lessthan100(78,22)

//  Add up the Numbers from a Single Number
function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

//   Oddish vs. Evenish
function oddishOrEvenish(num) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum % 2 === 0? "Evenish":"Oddish";
  }
  console.log(oddishOrEvenish(43));  

//Any Prime Number in Range
function primeInRange(n1, n2) {
    for (let i = n1; i <= n2; i++) {
      if (Prime(i)) {
        return true;
      }
    }
    return false;
  }
  
  function Prime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(primeInRange(3, 5));

// Left Shift by Powers of Two
function shiftToLeft(x, y) {
   return x * Math.pow(2, y);
 }
 console.log(shiftToLeft(12, 4)); 

//  Convert a Number to Base-2.
function binary(decimal) {
    if (decimal === 0) {
      return "0";
    }
  
    let binary1 = "";
  
    while (decimal > 0) {
      binary1 += decimal % 2;
      decimal = Math.floor(decimal / 2);
    }
  
    return binary1.split("").reverse().join("");
  }
  console.log(binary(1));  
