const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
let dead = 0;
let lost = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function handleClick(event) {
    const hole = event.target;
    
    if (hole.classList.contains('hole_has-mole')) {
        dead++;
    } else {
        lost++;
    }
    
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
    
    if (dead >= 10) {
        alert('Вы победили! Убито 10 кротов!');
        dead = 0;
        lost = 0;
        deadCounter.textContent = dead;
        lostCounter.textContent = lost;
    }
    
    if (lost >= 5) {
        alert('Игра окончена! 5 промахов.');
        dead = 0;
        lost = 0;
        deadCounter.textContent = dead;
        lostCounter.textContent = lost;
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', handleClick);
}