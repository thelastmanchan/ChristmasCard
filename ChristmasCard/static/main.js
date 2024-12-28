document.addEventListener('DOMContentLoaded', function() {
    const minigameButton = document.getElementById('minigame-button');
    
    if (minigameButton) {
        minigameButton.addEventListener('click', function() {
            console.log('미니게임 버튼 클릭됨');
            const gameWindow = window.open('{{ url_for("minigame") }}', '_blank');
            if (gameWindow) {
                console.log('미니게임 창이 열렸습니다.');
            } else {
                console.log('미니게임 창을 열 수 없습니다. 팝업 차단이 활성화되어 있을 수 있습니다.');
                alert('미니게임을 열 수 없습니다. 팝업 차단을 해제해주세요.');
            }
        });
    } else {
        console.log('미니게임 버튼을 찾을 수 없습니다.');
    }
});

function onMinigameClicked(btn) {
    console.log("onMinigmaeClicked");
}