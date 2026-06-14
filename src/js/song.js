const music = document.getElementById("bg-music");

function playMusic() {
    music.volume = 0.05;
    music.play().catch(() => {
        console.log("Autoplay bloqueado pelo navegador");
    });
}

document.addEventListener("click", playMusic, { once: true });
document.addEventListener("scroll", playMusic, { once: true });