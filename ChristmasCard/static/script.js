document.addEventListener('DOMContentLoaded', function() {
    const snowContainer = document.getElementById('snow');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.innerHTML = '❄';
        return snowflake;
    }

    for (let i = 0; i < 50; i++) {
        snowContainer.appendChild(createSnowflake());
    }
});
