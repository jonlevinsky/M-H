const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const bird = {
    x: 50,
    y: canvas.height / 2,
    radius: 20,
    velocityY: 0,
    gravity: 1,
    jumpStrength: -15,
};

const pipeGap = 200;
const pipeWidth = 50;
const pipes = [];

let score = 0;
let isGameOver = true;
let gameStarted = false;

function drawBird() {
    ctx.fillStyle = "#ff5733";
    ctx.beginPath();
    ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawPipes() {
    ctx.fillStyle = "#34af23";
    for (let i = 0; i < pipes.length; i++) {
        const pipe = pipes[i];
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
        ctx.fillRect(pipe.x, pipe.bottomY, pipeWidth, canvas.height - pipe.bottomY);
    }
}

function update() {
    if (isGameOver || !gameStarted) {
        requestAnimationFrame(update);
        return;
    }

    bird.velocityY += bird.gravity;
    bird.y += bird.velocityY;

    if (bird.y + bird.radius > canvas.height || bird.y - bird.radius < 0) {
        gameOver();
    }

    for (let i = 0; i < pipes.length; i++) {
        const pipe = pipes[i];
        pipe.x -= 5;

        if (bird.x + bird.radius > pipe.x && bird.x - bird.radius < pipe.x + pipeWidth) {
            if (bird.y - bird.radius < pipe.topHeight || bird.y + bird.radius > pipe.bottomY) {
                gameOver();
                return;
            }
        }

        if (pipe.x + pipeWidth < 0) {
            pipes.splice(i, 1);
            i--;
        }
    }

    if (pipes.length === 0 || pipes[pipes.length - 1].x + pipeGap < canvas.width) {
        createPipe();
    }

    if (pipes.length > 0 && bird.x > pipes[0].x + pipeWidth) {
        score++;
        pipes.shift();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();
    drawPipes();
    requestAnimationFrame(update);
}

function createPipe() {
    const topHeight = Math.random() * (canvas.height - 200) + 100;
    const bottomY = topHeight + pipeGap;
    pipes.push({ x: canvas.width, topHeight, bottomY });
}

function gameOver() {
    isGameOver = true;
    ctx.fillStyle = "#000";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2 - 15);
    ctx.fillText("Score: " + score, canvas.width / 2 - 40, canvas.height / 2 + 20);
}

document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        if (!gameStarted) {
            gameStarted = true;
            isGameOver = false;
            document.getElementById("startScreen").style.display = "none";
            update();
        } else if (!isGameOver) {
            bird.velocityY = bird.jumpStrength;
        }
    }
});

createPipe();

function gameOver() {
    isGameOver = true;
    ctx.fillStyle = "#000";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2 - 15);
    ctx.fillText("Score: " + score, canvas.width / 2 - 40, canvas.height / 2 + 20);

    // Zobrazí obrazovku Game Over a aktualizuje konečné skóre
    const gameOverScreen = document.getElementById("gameOverScreen");
    gameOverScreen.style.display = "block";
    document.getElementById("finalScore").textContent = score;
}

// Přidáme obsluhu události pro tlačítko Restart
document.getElementById("restartButton").addEventListener("click", () => {
    resetGame();
});

function resetGame() {
    isGameOver = false;
    gameStarted = false;
    score = 0;
    bird.y = canvas.height / 2;
    bird.velocityY = 0;
    pipes.length = 0;

    // Skryje obrazovku Game Over
    const gameOverScreen = document.getElementById("gameOverScreen");
    gameOverScreen.style.display = "none";

    // Znovu zobrazí obrazovku Start
    const startScreen = document.getElementById("startScreen");
    startScreen.style.display = "block";
}