let firstNumber;
let secondNumber;
let operation;
let operationTotal = 0;
let history = [];
let result = 0;

function sum (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function diff (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiply (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function division (firstNumber, secondNumber) {
  return firstNumber / secondNumber;
} 
function pow (firstNumber, secondNumber) {
  return Math.pow(firstNumber, secondNumber);
}
function sin (firstNumber) {
  return Math.sin(firstNumber);
}
function cos (firstNumber) {
  return Math.cos(firstNumber);
}
function radiansNumber () {
  do {
      namberA = +a;
  } while (+a !== namberA || a === null || a === '');
  return a;
}

function num() {
  do {
  operation = prompt(
    'Choose operation: +, -, *, division, pow, sin, cos, history', '+' );
  } while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== 'division' && operation !== 'pow' && 
  operation !== 'sin' && operation !== 'cos' && operation !== 'history' && operation !== null);
  return operation;
}

function main () {
operation = num();



if (operation === 'history') {
  let resultHistory = '';

  for (let i = 0; i < history.length; i++) {
    resultHistory += `${i + 1}. ${history[i]}\n`;
  }

  alert(resultHistory.length > 0 ? resultHistory : 'No history');

  doAgain = confirm(
    'Do you want calculations again?\nType OK'
  );
  if (doAgain === true) {
    return main();
  }
 } if (operation === 'sin' || operation === 'cos') {
    let radians = radiansNumber;

    while (isNaN(radians)) {
      radians = +prompt('First number:  ', 0);
    }

    if (operation === 'sin') {
      result = `${sin(radians)}`;
    } else {
      result = `${cos(radians)}`;
    }
  } else {
  do {
    firstNumber = +prompt('First number: ', 0);
  } while (isNaN(firstNumber));
  do {
    secondNumber = +prompt('Second number: ', 0);
  } while (isNaN(secondNumber));

    if (operation === '+') {
    result = `${sum(firstNumber, secondNumber)}`;
  } else if (operation === '-') {
    result = `${diff(firstNumber, secondNumber)}`;
  } else if (operation === '*') {
    result = `${multiply(firstNumber, secondNumber)}`;
  }  else if ( operation === 'pow') {
    result = `${pow(firstNumber, secondNumber)}`;
  } else if (operation === 'division') {
    if (secondNumber === 0) {
      result = 'Error';
    } else {
      result = `${division(firstNumber, secondNumber)}`;
    }
   } else {
    result = firstNumber ** secondNumber;
  }
}
const total = `Operation ${operation} finished with result: ${result}`;
alert(total);

history[operationTotal] = total;
operationTotal++;

doAgain = confirm(
  'Do you want more calculations?\nType Ok');
  if (doAgain === true) {
    return main();
  }
}
main()


