let btnIs = document.getElementById("btnIs")
let btnAre = document.getElementById("btnAre")
let btnArent = document.getElementById("btnArent")
let answer = document.getElementById('answer')

btnIs.addEventListener('click', function() {
    answer.innerHTML = 'is'
    btnIs.style.background = 'lime'
})

