document.addEventListener('DOMContentLoaded', function () {
    const snowContainer = document.getElementById('snow');
 
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px'; // 랜덤 x 위치
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 애니메이션 시간 랜덤
        snowflake.style.opacity = Math.random(); // 불투명도 랜덤
        snowflake.innerHTML = '❄'; // 눈송이 문자
 
        // 눈송이를 DOM에 추가
        snowContainer.appendChild(snowflake);
 
        // 애니메이션이 끝난 후 눈송이를 제거
        setTimeout(() => {
            snowContainer.removeChild(snowflake);
        }, parseFloat(snowflake.style.animationDuration) * 1000);
    }
 
    // 눈송이 생성 반복
    setInterval(createSnowflake, 200); // 매 200ms마다 새로운 눈송이 생성
 });
 