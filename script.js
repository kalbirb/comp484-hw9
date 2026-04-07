// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
var date = new Date;
// 2. Get the current month, day, and year
var month = date.getMonth();
var day = date.getDate(); // Pitfall. getDay() returns day of week ie 1 = Monday, 7 = Sunday.
var year = date.getFullYear();
// 3. Adjust month if needed (JavaScript months are 0-based)
month += 1;
// 4. Add leading zeros to month/day if needed
month = month.toString().padStart(2,"0");
day = day.toString().padStart(2,"0");
// 5. Create a string in the format: "Today is MM/DD/YYYY"
var outputPt1 = "<h3> Today is "+ month + '/' + day + '/' + year + "</h3>";
// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").innerHTML = outputPt1;

// date.toISOString().split('T')[0]
// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
var num1 = 67;
var num2 = 21;
//    - at least 1 decimal string (example: "19.75")
var dec1 = 3.14;
//    - at least 1 non-numeric string (example: "hello")
var str1 = "hello";
// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
var converted1 = Number(num1);
//    b. Check if it is NaN using Number.isNaN()
var bool1 = Number.isNaN(num1);
//    c. Check if it is an integer using Number.isInteger()
var isInt1 = Number.isInteger(num1);

//    a. Convert the value using Number()
var converted2 = Number(num2);
//    b. Check if it is NaN using Number.isNaN()
var bool2 = Number.isNaN(num2);
//    c. Check if it is an integer using Number.isInteger()
var isInt2 = Number.isInteger(num2);

//    a. Convert the value using Number()
var converted3 = Number(str1);
//    b. Check if it is NaN using Number.isNaN()
var bool3 = Number.isNaN(str1);
//    c. Check if it is an integer using Number.isInteger()
var isInt3 = Number.isInteger(str1);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"
var num1String = "Original: " + num1 + " -> Converted:" + converted1 + " -> isNaN: " + bool1 + " -> isInteger: " + isInt1;
var num2String = "Original: " + num2 + " -> Converted:" + converted2 + " -> isNaN: " + bool2 + " -> isInteger: " + isInt2;
var num3String = "Original: " + str1 + " -> Converted:" + converted3 + " -> isNaN: " + bool3 + " -> isInteger: " + isInt3;

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
var outputPt2 = "<h3>" + num1String + "<br>" + num2String + "<br>" + num2String + "</h3>";
// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = outputPt2;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// Grade Calculator
// 1. Create at least 2-3 numeric variables
//
var testMCQ;
var testFRQ;
var testTwo;
var testThree;
var gradeTotal;
// 2. Perform calculations:
//    - at least one addition
gradeTotal = testMCQ + testFRQ;
//    - at least one other operation (subtract, multiply, or divide)
//
gradeTotal += testTwo + testThree;
gradeTotal /= 3; // Average Calculation based on number of Tests.
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)