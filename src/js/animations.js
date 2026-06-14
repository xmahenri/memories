ScrollReveal().reveal('.title', {
  origin: 'top',
  duration: 5000,
  distance: '50%'
});

ScrollReveal().reveal('.subtitle', {
  origin: 'bottom',
  duration: 5000,
  distance: '50%'
});

ScrollReveal().reveal('.albun', {
  origin: 'bottom',
  duration: 5000,
  distance: '50%'
});

document.addEventListener("click", (e) => {

    const heartsCount = 15;

    for (let i = 0; i < heartsCount; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart-particle");
        heart.innerHTML = "❤";

        document.body.appendChild(heart);

        let x = e.clientX;
        let y = e.clientY;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        const angle = Math.random() * Math.PI * 2;

        let velocity = Math.random() * 6 + 4;

        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity;

        let gravity = 0.15;

        let opacity = 1;

        const size = Math.random() * 12 + 10;

        heart.style.fontSize = `${size}px`;

        const colors = [
            "#ff4d6d",
            "#ff758f",
            "#ff8fa3",
            "#ffb3c1",
            "#ff477e"
        ];

        heart.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        function animate() {

            x += vx;
            y += vy;

            vy += gravity;

            vx *= 0.98;

            opacity -= 0.012;

            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        }

        animate();
    }
});