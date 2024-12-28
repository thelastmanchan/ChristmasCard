document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    const gift = document.getElementById('gift');
    const scoreValue = document.getElementById('score-value');
    const gameContainer = document.getElementById('game-container');
    const minigameButton = document.getElementById('minigame-button');

    function moveGift() {
        const gameWidth = document.getElementById('game').offsetWidth - 30;
        const gameHeight = document.getElementById('game').offsetHeight - 30;
        const newX = Math.floor(Math.random() * gameWidth);
        const newY = Math.floor(Math.random() * gameHeight);
        gift.style.left = newX + 'px';
        gift.style.top = newY + 'px';
    }

    gift.addEventListener('click', function() {
        score++;
        scoreValue.textContent = score;
        moveGift();
    });

    // 콘솔에 로그 추가하여 이벤트 리스너 작동 확인
    minigameButton.addEventListener('click', function() {
        console.log('미니게임 버튼 클릭됨');
        if (gameContainer.style.display === 'none' || gameContainer.style.display === '') {
            gameContainer.style.display = 'block';
            moveGift(); // 게임 시작 시 선물 위치 초기화
        } else {
            gameContainer.style.display = 'none';
        }
    });
});
