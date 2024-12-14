document.addEventListener('DOMContentLoaded', function() {
    
    const snowContainer = document.getElementById('snow');
 
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 애니메이션 시간 랜덤
        snowflake.style.opacity = Math.random(); // 불투명도 랜덤
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 크기 랜덤
        snowflake.innerHTML = '❄'; // 눈송이 문자
        return snowflake; // 생성된 눈송이 반환
    }
 
    for (let i = 0; i < 50; i++) { // 눈송이 개수
        snowContainer.appendChild(createSnowflake());
    }
 });
 