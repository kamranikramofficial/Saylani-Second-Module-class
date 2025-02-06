// Chapter-37: Functions: Passing data back from them

// START KIA YAHA SEobtainedMarks

// function statement
function greet() {
  console.log("kese hn ap?");
}

// function call
greet();
greet();

// DATA PASS KIA, VERSATILE BANA DIA
function greet(msg) {
  console.log(msg);
}

greet("kese hn ap?");
greet("hello, how are you?");

// FUNCTION SE DATA WAPS KESE LE?

// simple example
function calculateSum(num1, num2) {
  // console.log(num1 + num2);
  var sum = num1 + num2;

  return sum;
}
calculateSum(1, 2)
console.log(calculateSum(2, 4))
var total = calculateSum(10, 2);
total = total + 3
console.log(total);

// complex example: calculate matric percentage

// formula:  / totalMarks * 100

function calculateObtainedMarks(marks) {
  var sum = 0;
  for (let i = 0; i < marks.length; i++) {
    // sum = sum + marks[i];
    sum += marks[i];
  }
  return sum;
}

function calculatePercentage(obtainedMarks, totalMarks) {
  return (obtainedMarks / totalMarks) * 100;
}

calculateObtainedMarks([95, 67, 87, 59, 90])

var obtainedMarks = calculateObtainedMarks([95, 67, 87, 59, 90]);
console.log(obtainedMarks)
var totalMarks = 500;
calculatePercentage(obtainedMarks, totalMarks)
console.log(calculatePercentage(obtainedMarks, totalMarks))
var matricPercentage = calculatePercentage(obtainedMarks, totalMarks)

console.log(matricPercentage)

// fix to 1 decimal value
matricPercentage = matricPercentage.toFixed(1);

console.log(matricPercentage);


export { calculateObtainedMarks, calculatePercentage }