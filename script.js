// Tips
const tips = [
    "Welcome to Underrail Gaming",
    "Respect all players and staff",
    "Connecting to server...",
	"Sit back and enjoy the vibes",
];

let tipIndex = 0;
const tipElement = document.getElementById("tip");

setInterval(() => {
    tipIndex = (tipIndex + 1) % tips.length;
    tipElement.textContent = tips[tipIndex];
}, 3000);

// Music autoplay fix
document.body.addEventListener("click", () => {
    document.getElementById("music").play();
});

// Particle system
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: Math.random() * 0.3,
        dy: Math.random() * 0.3,
        alpha: Math.random()
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x > canvas.width) p.x = 0;
        if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
