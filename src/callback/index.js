function sum(num1, num2){
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5,2,sum));

const sum2 = (num1, num2) => num1 + num2;

const calc2 = (num1, num2, callback) => callback(num1, num2);

//console.log(calc2(6, 2, sum2));

function date(callback) {
  console.log(new Date);
  setTimeout(function () {
    let date = new Date;
    callback(date);
  }, 3000)
}

function printDate (dateNow) {
  console.log(dateNow);
}

date(printDate);
