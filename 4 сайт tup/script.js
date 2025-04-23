// let name = prompt("Введите ваше имя")
// alert("салам "+name)
// let num1=+prompt("Введите число")
// let num2=+prompt("Введите второе число")
// let result=num1+num2
// alert("Сумма"+result)
// result=num1-num2
// alert("Разность"+result)
// result=num1*num2
// alert("Произведение"+result)
// result=num1/num2
// alert("Деление"+result)
function checkCode(){
    let correctNumbers=[4,2,5,2,8]
    const input = document.getElementById("input").value
    const numbers = input.split('').map(Number)
    if(arrayEqual(numbers.sort(),correctNumbers.sort())){
        document.getElementById('pizza').style.display = 'block';
    }
    else{
        alert("неверный код")
    }
}
function arrayEqual(arr1, arr2){
    return arr1.length == arr2.length && arr1.every((value, index) => value === arr2[index])
}