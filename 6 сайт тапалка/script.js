let scoreElement=document.getElementById("score") 
let clickButton=document.getElementById("clickButton")
let score = parseInt(localStorage.getItem('score')) || 0;
let clickPower = parseInt ( localStorage.getItem("click_power"))|| 1
scoreElement.textContent=score
clickButton.addEventListener('click', () => {
console.log(score)
    score = score + clickPower;
    scoreElement.textContent = score;
    localStorage.setItem('score', score)
})
document.getElementById("booster-zolo").textContent+=clickPower
const autoClick = parseInt(localStorage.getItem('auto_click')) || 0
document.getElementById("booster-stick").textContent+=autoClick
setInterval(() => {
    score += autoClick
    scoreElement.textContent = score
    localStorage.setItem("score",score)
}, 1000)

let x3=localStorage.getItem("x3")
if (x3==1){
        clickPower=3
        document.getElementById("booster-zolo").textContent=clickPower
        setInterval(() => {
       clickPower = parseInt ( localStorage.getItem("click_power"))|| 1
    x3=0
    localStorage.setItem("x3",x3)     
    }, 15000)
}