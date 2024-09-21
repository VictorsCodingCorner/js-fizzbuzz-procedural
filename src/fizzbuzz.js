const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Write your code below this line

answer.forEach((element, index, array) => {

    if(element % 3 === 0 && element % 5 === 0) {
        array[index] = 'FizzBuzz'
    }else if(element % 3 === 0) {
        array[index] = 'Fizz'
    }else if(element % 5 === 0) {
        array[index]= 'Buzz'
    }


});



// Don't touch the code below this line, we'll cover it later
module.exports = answer
