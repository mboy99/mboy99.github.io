let powerClick = parseInt ( localStorage.getItem("click_power"))|| 1
let price = parseInt ( localStorage.getItem("price1"))|| 200
    document.getElementById("priceZolo").textContent="Стоимость: "+price+" 🪙"
    let clicks = localStorage.getItem('score') 
function clickPower(){
if(clicks>=price){
    powerClick++
    localStorage.setItem('click_power', powerClick)
    clicks = clicks - price
    localStorage.setItem('score',clicks)
    price= parseInt(price*1.5)
    localStorage.setItem("price1",price)
    document.getElementById("priceZolo").textContent="Стоимость: "+price+" 🪙"
}
}
let autoClick = parseInt ( localStorage.getItem('auto_click')) || 0
let price2 = parseInt ( localStorage.getItem('price2')) || 300
    document.getElementById("priceNega").textContent="Стоимость: "+price2+" 🪙"
    function autoClickF(){
        if(clicks>=price2){
    autoClick++
    localStorage.setItem('auto_click', autoClick)
    clicks = clicks - price2
    localStorage.setItem('score',clicks)
    price2= parseInt(price2*2.5)
    localStorage.setItem("price2",price2)
    document.getElementById("priceNega").textContent="Стоимость: "+price2+" 🪙"
    }
}
let x3trigger=localStorage.getItem("x3") || 0
let price3 = parseInt ( localStorage.getItem('price3')) || 150
            document.getElementById("price3").textContent="Стоимость: "+price3+" 🪙"
function x3(){
    if(clicks>=price3){
        clicks=clicks-price3
            localStorage.setItem('score',clicks)
            x3trigger=1
            localStorage.setItem("x3",x3trigger)
            price3=parseInt(price3/2)
            localStorage.setItem("price3",price3)
            document.getElementById("price3").textContent="Стоимость: "+price3+" 🪙"
    }
}
let price4 = parseInt ( localStorage.getItem('price4')) || 1500
            document.getElementById("price4").textContent="Стоимость: "+price4+" 🪙"
function x2(){
    if(clicks>=price4){
        clicks=clicks-price4
            localStorage.setItem('score',clicks)
            price4=parseInt(price4*2)
            localStorage.setItem("price4",price4)
            document.getElementById("price4").textContent="Стоимость: "+price4+" 🪙"
            powerClick=powerClick*2
                localStorage.setItem('click_power', powerClick)
    }
}