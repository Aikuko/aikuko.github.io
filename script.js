let score = 0;
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.getElementById('score');

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    return hole;
}

function showMole() {
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    const mole = document.createElement('div');
    mole.classList.add('mole');
    hole.appendChild(mole);
    mole.style.display = 'block';

    mole.addEventListener('click', () => {
        score++;
        scoreBoard.textContent = score;
        mole.style.display = 'none';
        hole.removeChild(mole);
    });

    setTimeout(() => {
        mole.style.display = 'none';
        if (hole.contains(mole)) {
            hole.removeChild(mole);
        }
        if (score < 10) {
            showMole();
        } else {
            alert('Game over! Your score is ' + score);
            score = 0;
            scoreBoard.textContent = score;
        }
    }, time);
}

showMole();
