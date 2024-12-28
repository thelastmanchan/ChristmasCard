document.addEventListener('DOMContentLoaded', function () {
    let score = 0;
    
    const gift = document.getElementById('gift');
    const scoreValue = document.getElementById('score-value');

    function moveGift() {
        const gameContainer = document.getElementById('game-container');
        const gameWidth = gameContainer.offsetWidth - gift.offsetWidth; // 선물 크기 고려
        const gameHeight = gameContainer.offsetHeight - gift.offsetHeight; // 선물 크기 고려

        const newX = Math.floor(Math.random() * gameWidth);
        const newY = Math.floor(Math.random() * gameHeight);

        gift.style.left = `${newX}px`;
        gift.style.top = `${newY}px`;
    }

    gift.addEventListener('click', function () {
        score++;
        scoreValue.textContent = score; // 점수 업데이트
        moveGift(); // 선물 위치 이동
    });

    // 초기 선물 위치 설정
    moveGift();
});
