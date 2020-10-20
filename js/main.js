var numbers = [];

var counter = 1;

while (counter <= 100) {
    
    var number = counter;

    if (counter % 3 == 0 && counter % 5 == 0) {
        number = 'FizzBuzz';
    } else if (counter % 3 == 0) {
        number = 'Fizz';
    } else if (counter % 5 == 0) {
        number = 'Buzz';
    }
    
    numbers.push(number);

    counter++;
}

console.log(numbers);