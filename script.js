let btnIs = document.getElementById("btnIs")
let btnAre = document.getElementById("btnAre")
let btnArent = document.getElementById("btnArent")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnAre.addEventListener('click', function() {
    let audio = document.getElementById('song')
    audio.play()
    answer.innerHTML = 'are'
    btnAre.style.background = 'lime'
    answer.style.color = 'lime'
    btnAre.disabled = 'true'
    btnIs.disabled = 'true'
    btnArent.disabled = 'true'
})

btnIs.addEventListener('click', function() {
    let audio = document.getElementById('pop')
    audio.play()
    answer.innerHTML = 'is'
    btnIs.style.background = 'red'
    answer.style.color = 'red'
    btnIs.disabled = 'true'
})

btnArent.addEventListener('click', function() {
    let audio = document.getElementById('pop')
    audio.play()
    answer.innerHTML = "aren't"
    btnIs.style.background = 'red'
    answer.style.color = 'red'
    btnArent.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Há 6 pessoas na reunião.'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate.'
    }, 2000);
})



