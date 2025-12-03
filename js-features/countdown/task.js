const timerElement = document.getElementById('timer');

let timeLeft = parseInt(timerElement.textContent, 10);

if (isNaN(timeLeft)) {
    timeLeft = 59;
    timerElement.textContent = timeLeft;
}


function updateTimer() {
    timeLeft--;
    
    timerElement.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        // Останавливаем таймер
        clearInterval(timerInterval);
        
        const statusElement = document.getElementById('status');
        statusElement.textContent = 'Конкурс окончен!';
        
        // Показываем уведомление о победе
        setTimeout(() => {
            alert('Вы победили в конкурсе!');
        }, 100);
    }
}

const timerInterval = setInterval(updateTimer, 1000);
