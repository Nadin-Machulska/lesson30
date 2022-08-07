"use strickt"

document.querySelector('.calculate').onclick = calcUsersAge;
function calcUsersAge(){
    let usersDateOfBirth = document.querySelector('.age').value;
    let currentDate = new Date();
    const usersAge = currentDate - usersDateOfBirth;

    if (usersAge > 11){
        alert("You are child")
    } else if (11 < usersAge < 18){
        alert("You are teenager")
    } else if (17 < usersAge < 60){
        alert ("You are adult")
    } else if (usersAge > 60){
        alert("You are pensioner")
    }
}

//вказати число від 0-9 і показати символ на розкладці

document.querySelector('.find-symbol').onclick = findSpecialSymbol;
function findSpecialSymbol (){
    let inputNumber = document.querySelector('.input-number').value;
    let specialSymbol = document.querySelector('.show-symbol');
    

    if (inputNumber = 0){
        specialSymbol.textContent = ')'
    } else if (inputNumber = 1){
        specialSymbol.textContent = '!'
    } else if (inputNumber = 2){
        specialSymbol.textContent = '@'
    } else if (inputNumber = 3){
        specialSymbol.textContent = '#'

    } else if (inputNumber = 4){
        specialSymbol.textContent = '$'

    } else if (inputNumber = 5){
        specialSymbol.textContent = '%'

    } else if (inputNumber = 6){
        specialSymbol.textContent = '^'

    } else if (inputNumber = 7){
        specialSymbol.textContent = '&'
    } else if (inputNumber = 8){
        specialSymbol.textContent = '*'
    } else if (inputNumber = 9){
        specialSymbol.textContent = '('
    }
}

// Щоб знайти НСД двох або кількох чисел, необхідно:

// розкласти дані числа на прості множники;
// скласти добуток усіх спільних простих множників;
// обчислити складений добуток.

//знайти найбільший спільний дільник
// document.querySelector('.find-divisor').onclick = greatCommonDivisor;
// let x = document.querySelector('.first-number').value;
// let y = document.querySelector('.second-number').value;

// function greatCommonDivisor(x, y){

//     if ((typeof x !== 'number') || (typeof y !== 'number')){
//         return false;
//     }
   
//     x = Math.abs(x);
//     y = Math.abs(y);
//         document.querySelector('.show-divisor').innerHTML = x;

//     while(y) {
//         var t = y;
//         y = x % y;
//         x = t;
//   }
//   document.querySelector('.show-divisor').innerHTML = x;

//     return x;

// }
document.querySelector('.find-divisor').onclick = greatCommonDivisor;
function greatCommonDivisor (x, y) {
    var x = document.querySelector('.first-number').value;
    var y = document.querySelector('.second-number').value;

  for ( x = arguments[0], i = 1; i < arguments.length; i++) {
    y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  console.log(x)
//   return x;
  document.querySelector('.show-divisor').innerHTML = x
}







//знайти усі дільники числа
document.querySelector('.find-all-divisors').onclick = findAllDivisors;
function findAllDivisors(e){

  e.preventDefault();

  let num = Number(document.querySelector(`.any-number`).value);

  if (Number.isInteger(num) && num > 0) {
    let arrDiv = [];
    for (let i = 0; i <= num; i++) {
      if ((num % i) == 0) {
        arrDiv.push(i);
      }
      document.querySelector(`.show-all-divisors`).innerHTML = arrDiv;
    }
  } 
//   else {
    // document.querySelector(`.task5Answer`).innerHTML = 'ERROR! Please enter positive integer number';
//   }
}

//Введіть п'яти-розрядне число, щоб дізнатись, чи є воно паліндромом
document.querySelector('.btn').onclick = palindrom;
function palindrom (arr){
     arr = document.querySelector('.f-d-number').value;
    arr = arr.toLowerCase()

    let arr2 = arr.split('');
    arr2 = arr2.reverse();
    arr2 = arr2.join();

    if (arr == arr2){
        document.querySelector('.show-result').innerHTML = ('true');
        return true
    } else if (arr !== arr2) { 
        document.querySelector('.show-result').innerHTML = ('false');
        return false
    }


    return arr2;


}

//вирахувати знижку

document.querySelector('.button').onclick = calculateDiccond;
function calculateDiccond (){
    let purchasePrice = document.querySelector('.purchase-price').value;
    purchasePrice > 199;

    let priceWithDiscond1 = purchasePrice - (purchasePrice / 100 * 3);
    let priceWithDiscond2 = purchasePrice - (purchasePrice / 100 * 5);
    let priceWithDiscond3 = purchasePrice - (purchasePrice / 100 * 7);
    
    if (199 < purchasePrice < 301){
        document.querySelector('.discond').innerHTML = ("Сумма покупки зі знижкою - " + priceWithDiscond1)
    } else if (300 < purchasePrice < 501){
        document.querySelector('.discond').innerHTML = ("Сумма покупки зі знижкою - " + priceWithDiscond2)
    } else if (purchasePrice > 500){
        document.querySelector('.discond').innerHTML = ("Сумма покупки зі знижкою - " + priceWithDiscond3)

    }
}

//Введіть два числа, щоб порахувати сумму чисел у діапазоні

document.querySelector('.calc-sum').onclick = calcSumOfSpectr;
function calcSumOfSpectr(){
    let beginingOfSpectr = document.querySelector('.random-number1');
    let endOfSpectr = document.querySelector('.random-number2');

    let sum = 0;
 
    while(beginingOfSpectr <= endOfSpectr){       
       
        sum += beginingOfSpectr;  
       
        beginingOfSpectr ++;
       
    }
    
    document.querySelector('.result-of-sum').innerHTML = sum;
}

//Зацикли відображення днів тижня таким чином: 
//«День тижня. Хочеш побачити наступний день? » 
//і так до тих пір, поки користувач натискає OK.

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хочете побачити який наступний день?`)) {
  currDay = (currDay + 1) % days.length;
}

//ввести 10 чисел і порахувати скільки введено додатніх, відємних та нулів

document.getElementById("send-to-column").onclick = calculateStatistick;
let randomUsersNumber = document.querySelector('.statistick-random-numbers').value;

let positiveNumbers = [];
let negativeNumbers = [];
let nulls = [];

function calculateStatistick(){

    for (let i=0; i > 0;) {
        document.getElementById("positive-numbers").innerHTML = randomUsersNumber[i];
        positiveNumbers.push(i);
    }
    
    for (let i=0; i < 0;){
        document.getElementById("negative-numbers").innerHTML = randomUsersNumber[i];
        negativeNumbers.push(i);

    }

    for (let i=0; i==0;){
        document.getElementById("nulls").innerHTML = randomUsersNumber[i];
        nulls.push(i);
    }

    
    
}
function arraySum(positiveNumbers) {
    for( i = 0; i < positiveNumbers.length; i++){
         sum += positiveNumbers[i]; 
         document.getElementById("posit-sum").innerHTML = sum;
        }
    }

function arraySum2 (negativeNumbers){

        for( i = 0; i < negativeNumbers.length; i++){
            sum += negativeNumbers[i]; 
            document.getElementById("negative-sum").innerHTML = sum;
            }
    }

function arraySum3(nulls)
    {
        for( i = 0; i < nulls.length; i++){
             sum += nulls[i]; 
             document.getElementById("nulls-sum").innerHTML = sum;
            }
        }
//после введения одного числа страница зависает и дальше не работает

//таблица умножения
function multiplicationTable(){
//let resultNumber = 1;

for (i=1; i<= 9; i++){
    for (j = 1; j <= 9; j++){
       let resultNumber = i*j;
 
    }
}
document.writeln('.multiplication-table')
document.querySelector('.multiplication-table').innerHTML = resultNumber;
document.write('<br>')
}