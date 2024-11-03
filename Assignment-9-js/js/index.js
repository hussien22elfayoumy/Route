// NOTE:- Q1

/* var num = prompt('Please inter a number');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid number');
else {
  num = +num;
  console.log(num);
} */

// NOTE:- Q2

/* var num = prompt('Please inter a number');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid number');
else {
  num = +num;
  if (num % 3 === 0 && num % 4 === 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
} */

// NOTE:- Q3
/* 
var num1 = prompt('Please inter a number 1: ');
var num2 = prompt('Please inter a number 2: ');
if (
  !num1 ||
  num1 === '' ||
  num1 === ' ' ||
  isNaN(+num1) ||
  !num2 ||
  num2 === '' ||
  num2 === ' ' ||
  isNaN(+num2)
)
  console.log('enter a valid num1ber');
else {
  num1 = +num1;
  num2 = +num2;

  if (num2 === num1) {
    console.log('enter non equal numbers');
  } else if (num2 > num1) {
    console.log(num2);
  } else console.log(num1);
} */

// NOTE:- Q4

/* var num = prompt('Please inter a number');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid number');
else {
  num = +num;
  if (num > 0) {
    console.log('Positive');
  } else if (num < 0) {
    console.log('N
		egative');
  } else {
    console.log('Zero is not Positive nor Negative');
  }
} */

// NOTE:- Q5

/* var x = prompt('Please inter a number 1: ');
var y = prompt('Please inter a number 2: ');
var z = prompt('Please inter a number 3: ');
if (
  !x ||
  x === '' ||
  x === ' ' ||
  isNaN(+x) ||
  !y ||
  y === '' ||
  y === ' ' ||
  isNaN(+y) ||
  !z ||
  z === '' ||
  z === ' ' ||
  isNaN(+z)
)
  console.log('enter a valid num1ber');
else {
  x = +x;
  y = +y;
  z = +z;

  var min, max;

  if ((x > y && x > z) || x === y || x === z) {
    max = x;

    if (y > z) min = z;
    else min = y;
  } else if ((y > x && y > z) || y === x || y === z) {
    max = y;

    if (x > z) min = z;
    else min = x;
  } else if ((z > x && z > y) || z === x || z === y) {
    max = z;

    if (x > y) min = y;
    else min = x;
  }

  console.log(max + ' is the max and ' + min + ' is the min');
} */

// NOTE:- Q6
