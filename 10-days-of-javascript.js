//Day 0: hell world

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}

//Day 0: data types
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(parseInt(firstInteger) + parseInt(secondInteger));

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(parseFloat(firstDecimal)+parseFloat(secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}

//Day 1
/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
    let area = (length*width);
    // Write your code here

    return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
    let perimeter = (length*2 + width*2);
    // Write your code here

    return perimeter;
}

/*
 * Create the function factorial here
 */
function factorial(n){
    return (n != 1) ? n * factorial(n - 1) : 1;
    if (n!=1){
        return n*facftorial(n-1);
    }
}

    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = readLine();
    // Print the area of the circle:
    console.log (PI*r*r);
    // Print the perimeter of the circle:
    console.log(2*PI*r);

//Day 2:

function getGrade(score) {
    let grade = 0
    // Write your code here
    if (score <=30 && score >25){
        grade = 'A';
    }else if (score >20 && score <=25){
        grade = 'B';
    }else if(score >15 && score <= 20){
        grade= 'C';
    }else if (score>10 && score <=15){
        grade = 'D';
    }else if (score>5 && score <=10){
        grade = 'E';
    }else if (score <=5){
        grade = 'F'
    }
    return grade;
}

function getLetter(s) {
    let letter;
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    for (var i =0; i<s.length;i++){
        if (vowels.includes(s[i])){
            console.log(s[i]);
        }
        else{
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());
}

//Day 3
function getSecondLargest(nums) {
    // Complete the function
    var newArray = [...new Set(nums)];
    newArray.sort((a,b) => b-a);
    return newArray[1];
}

