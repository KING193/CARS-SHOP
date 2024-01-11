var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playerbtn = document.getElementById("playbtn");

var playpause = function() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

playerbtn.addEventListener("click", playpause);

player.onplay = function() {
    playerbtn.classList.remove("fa-play")
    playerbtn.classList.add("fa-pause")
}

player.onpause = function() {
    playerbtn.classList.add("fa-play")
    playerbtn.classList.remove("fa-pause")
}

player.ontimeupdate = function() {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);

    let duration = player.duration;
    prog = Math.floor((ct * 100) / duration)
    progress.style.setProperty("--progress", prog + "%")
}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60)
    seconds = Math.floor(ct % 60)

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    return minutes + ":" + seconds
}

// //

let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2500)

    })

})