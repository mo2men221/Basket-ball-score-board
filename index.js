let scoreH = document.getElementById("score-H")
let scoreA = document.getElementById("score-A")

let pointsH = 0
let pointsA = 0

function plusOneHome(){
    pointsH +=1
    scoreH.textContent = pointsH
}
function plusOneAway(){
    pointsA +=1
    scoreA.textContent = pointsA
}
function plusTwoHome(){
    pointsH +=2
    scoreH.textContent = pointsH
}
function plusTwoAway(){
    pointsA +=2
    scoreA.textContent = pointsA
}
function plusThreeHome(){
    pointsH +=3
    scoreH.textContent = pointsH
}
function plusThreeAway(){
    pointsA +=3
    scoreA.textContent = pointsA
}