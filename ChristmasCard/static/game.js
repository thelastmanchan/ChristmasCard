let score = 0;
const gift = document.getElementById('gift');
const scoreValue = document.getElementById('score-value');

function moveGift() {
    const gameWidth = document.getElementById('game').offsetWidth - 30;
    const gameHeight = document.getElementById('game').offsetHeight - 30;
    const newX = Math.floor(Math.random() * gameWidth);
    const newY = Math.floor(Math.random() * gameHeight);
    gift.style.left = newX + 'px';
    gift.style.top = newY + 'px';
}

gift.addEventListener('click', () => {
    score++;
    scoreValue.textContent = score;
    moveGift();
});

// 초기 선물 위치 설정
moveGift();
