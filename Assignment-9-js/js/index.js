// NOTE:- Q1

/* var num = prompt('Please enter a number');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid number');
else {
  num = +num;
  console.log(num);
} */

// NOTE:- Q2

/* var num = prompt('Please enter a number');
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
var num1 = prompt('Please enter a number 1: ');
var num2 = prompt('Please enter a number 2: ');
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

/* var num = prompt('Please enter a number');
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

/* var x = prompt('Please enter a number 1: ');
var y = prompt('Please enter a number 2: ');
var z = prompt('Please enter a number 3: ');
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

/* var num = prompt('Please enter a number');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid number');
else {
  num = +num;
  if (num % 2 === 0) console.log('Even');
  else console.log('Odd');
} */

// NOTE:- Q7

/* var char = prompt('enter a character: ');

if (!char || char === '' || char === ' ' || !isNaN(+char)) {
  console.log('enter a valid character');
} else if (
  char === 'a' ||
  char === 'A' ||
  char === 'e' ||
  char === 'E' ||
  char === 'i' ||
  char === 'I' ||
  char === 'o' ||
  char === 'O' ||
  char === 'u' ||
  char === 'U'
) {
  console.log('Vowel');
} else console.log('Consonant'); */

// NOTE:- Q8

/* var num = prompt('Please enter a number');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid number');
else {
  num = +num;
  for (var i = 1; i <= num; i++) console.log(i);
} */

// NOTE:- Q9

/* var num = prompt('Please enter a number');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid number');
else {
  num = +num;

  for (var i = 1; i <= 12; i++) console.log(num * i);
} */

// NOTE:- Q10

/* var num = prompt('Please enter a number');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid number');
else {
  num = +num;

  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} */

// NOTE:- Q11

/* var num1 = prompt('Please enter a number 1: ');
var num2 = prompt('Please enter a number 2: ');
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
  var pow = 1;

  while (num2 > 0) {
    pow *= num1;
    num2--;
  }

  console.log(pow);
} */

// NOTE:- Q12

/* var subjectMark = 100;
var numOfSubjects = 5;
var totalSubjectsMarks = 0;
var message;
for (var i = 0; i < numOfSubjects; i++) {
  if (i === 0) message = 'Enter first mark: ';
  if (i === 1) message = 'Enter second mark: ';
  if (i === 2) message = 'Enter third mark: ';
  if (i === 3) message = 'Enter fourth mark: ';
  if (i === 4) message = 'Enter fifth mark: ';
  // totalSubjectsMarks += +prompt('Enter Mark NO ' + (i + 1) + ' : ');
  totalSubjectsMarks += +prompt(message);
}
var average = (totalSubjectsMarks / (subjectMark * numOfSubjects)) * 100;
console.log(
  'total: ' +
    totalSubjectsMarks +
    ', average: ' +
    average +
    ', and percentage: ' +
    average +
    '%'
); */

// NOTE:- Q13

/* var num = prompt('Please enter a month');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid month');
else {
  num = +num;

  if (num > 0 && num <= 12) {
    if (
      num === 1 ||
      num === 3 ||
      num === 5 ||
      num === 7 ||
      num === 8 ||
      num === 10 ||
      num === 12
    ) {
      console.log('31 days');
    } else if (num === 2) console.log('28 days');
    else console.log('30 days');
  } else {
    console.log('enter a valid month');
  }
} */

// NOTE:- Q14

/* var numOfSubjects = 5;
var subjectMark = 100;
var subjectGrade;
var message;

var markPercentage;

for (var i = 0; i < numOfSubjects; i++) {
  if (i === 0) message = 'Enter first mark: ';
  if (i === 1) message = 'Enter second mark: ';
  if (i === 2) message = 'Enter third mark: ';
  if (i === 3) message = 'Enter fourth mark: ';
  if (i === 4) message = 'Enter fifth mark: ';
  userMark = +prompt(message);
  if (userMark >= 90 && userMark <= 100) subjectGrade = 'A';
  if (userMark >= 80 && userMark < 90) subjectGrade = 'B';
  if (userMark >= 70 && userMark < 80) subjectGrade = 'C';
  if (userMark >= 50 && userMark < 70) subjectGrade = 'D';
  if (userMark < 50) subjectGrade = 'F';

  markPercentage = (userMark / 100) * 100 + '%';

  if (i === 0) message = 'Your first mark: ';
  if (i === 1) message = 'Your second mark: ';
  if (i === 2) message = 'Your third mark: ';
  if (i === 3) message = 'Your fourth mark: ';
  if (i === 4) message = 'Your fifth mark: ';

  console.log(message + subjectGrade + ' and ' + markPercentage);
} */

// NOTE:- Q15

/* var num = prompt('Please enter a month');
if (!num || num === '' || num === ' ' || isNaN(+num))
  console.log('enter a valid month');
else {
  num = +num;

  switch (num) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log('31 days');
      break;
    case 2:
      console.log('28 days');
      break;
    case 2:
    case 4:
    case 6:
    case 9:
    case 11:
      console.log('30 days');
      break;
    default:
      console.log('enter a valid month');
  }
} */
