// let num1 = +prompt('son kiritng')
// let amal = prompt('amal')
// let num2 = +prompt('son kiritng')



// function calculate(son1, amal, son2) {

//     if (amal === '-') {
//         return son1 - son2

//     }
//     else if (amal === '%') {
//         return son1 / son2
//     }
//     else if (amal === '+') {
//         return son1 + son2
//     }
//     else if (amal === '*') {
//         return son1 * son2
//     }
// }



// console.log(calculate(num1, amal, num2))


function showMaxAlert(num1, num2) {
    var maxNum = Math.max(num1, num2);
    alert("Наибольшее число: " + maxNum);
}

// Пример использования:
var a = 5;
var b = 10;
showMaxAlert(a, b);