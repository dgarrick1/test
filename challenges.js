// string reverse - split each character, reverese adn then join back together
function stringReverse(str) {
    return str.split("").reverse().join("");
};



// user doesnt know number of dragons or bullets
// takes 2 bullets to kill a dragon
// will hero survive 
// bullets divided by dragons is greater than or equal to 2
// return true (will survive) or false if not greater than 2 and will die
function hero(bullets, dragons){
    return bullets / dragons >= 2 ? true : false;
}

// repeat String
function repeatString(numberOfTimes, str){
    return str.repeat(numberOfTimes);
}

// odd or even 
// if statement using modulous operator
function oddEven (number){
    if (number % 2 ==0){
        return "Even"
    } else {
        return "Odd"
    }
}

// centuary round up 
function century (year){
    return Math.ceil(year/100);
}

// a number is divisble by the 2nd and 3rd number returns true or false
function isDivisible(startNumber, num2, num3){
    if (startNumber % num2 == 0 && startNumber % num3 ==0){
        return true;
    } else {
        return false
    }
}

// summation e.g 4 = 1+2+3+4 = 10
// create variable to store the count
// use for loop while number less or equal to num
// add count to the loop and return count
function summation(num){
    let count = 0;
    for (let i =0; i<=num; i++){
        count += i;
    }

    return count;
}

// remove first and last letters of a string
function removeFirstAndLastLetter(str){
    return str.slice(1,-1);
}

// find smallest integer in an array
// create variable position it at start of array
// for loop- looping though full length of array
// inside loop min is equal to the array
// if less than array numbers.
// tenary op - if true equal to the min false is just part of array
function findSmallest(arr){
    let min = arr[0];
    for(let i =0; i<arr.length; i++){
        min = min < args[i] ? min : args[i];
    }
    return min;
}

// adding the integers values of two arrays
function addingTheSumOfTwoArrays(arr1, arr2){
    let finalSum =0;
    for(let i =0; i<arr1.length; i++){
        finalSum+=arr1[i];
    }

    for (let i =0; i<arr2.length; i++){
        finalSum+= arr2[i];
    }
    return finalSum
}

// split a string and conver to array of words
function stringToArray(string){
    return string.split(" ");
}

// basic maths operations
function mathsOps(operation, value1, value2){
    if (operation == '+'){
        return value1+value2
      }
      if (operation == '-'){
        return value1-value2
      }
      
      if (operation == '*'){
        return value1 * value2
      }
      
      if(operation == '/'){
        return value1 / value2
      }
}

// add the sum of only positive integers from an array
function positiveSum(arr){
    let total = 0;
    for (let i =0; i<arr.length; i++){
        if(arr[i] >=0){
            total += arr[i];
        }
    }
    return total;
}

// returns array of integers with new array with each value doubled
function maps(arr){
    return arr.map(n=> n*2);
}

// return average of an array rounded down to the nearest integer.
function getAverage(marks){
    let sum = 0;
    for (let i in marks) {
        sum += marks[i];
    }

    return parseInt( sum / marks.length);
}

// name greetings special johnny
function greetings(name){
    if(name ==="Johnny") {
        return "hello my love"
    } else {
        return "hello" + name + "!";
    }

    // return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

function noSpace(str){
    return str.split(' ').join('');
}
