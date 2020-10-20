var numbers = [];

// WHILE

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

var list = '';

for (var i = 0; i < numbers.length; i++) {
    var item = numbers[i];

    list += '<li>' + '<span>' + item + '</span>' + '</li>';
}

document.getElementById('item').innerHTML = list;

// FOR

/* for (var i = 1; i < 100; i++) {
    var item = i;

    if (i % 3 == 0 && i % 5 == 0) {
        item = 'FizzBuzz';
    } else if (i % 3 == 0) {
        item = 'Fizz';
    } else if (i % 5 == 0) {
        item = 'Buzz';
    }

    numbers.push(item);
}

console.log(numbers); */