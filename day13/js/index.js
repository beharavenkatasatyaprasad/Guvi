function onPlay(){
    window.open("game.html", "_self")
}

function onHighScores(){
    window.open("highscores.html", "_self")
}

let main_cont = document.createElement("div")
main_cont.classList.add("container", "text-center", "mt-5")
let head = document.createElement("h1")
head.innerHTML = "Quick Quiz"
head.style.fontSize = "4.5rem"
head.style.color = "#7AB8EF"

let butPlay = document.createElement("button")
butPlay.classList.add("mt-4", "btn", "btn-lg", "btn-info", "btn-block", "col-md-6", "offset-md-3")
butPlay.style.fontSize = "2rem"
butPlay.innerHTML = "Play"
butPlay.id = "play"
butPlay.addEventListener("click", function(){onPlay()})

let scoresBut = document.createElement("button")
scoresBut.classList.add("mt-3", "btn", "btn-lg", "btn-info", "btn-block", "col-md-6", "offset-md-3")
scoresBut.style.fontSize = "2rem"
scoresBut.innerHTML = "High Scores"
scoresBut.id = "highscores"
scoresBut.addEventListener("click", function(){onHighScores()})

main_cont.append(head, butPlay, scoresBut)
document.body.appendChild(main_cont)
