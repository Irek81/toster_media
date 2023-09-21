// Устанавливаем начальное значение большой картинки при загрузке страницы
const bigImg = document.getElementById("big-img");
bigImg.src = "img/black.png"; // Замените на путь к вашей первой большой картинке
bigImg.style.display = "block"; // Первая большая картинка отображается по умолчанию

function changeBigImage(newSrc, clickedImg) {
    // Скрываем все большие изображения
    const bigImgs = document.querySelectorAll(".big-img");
    bigImgs.forEach((img) => {
        img.style.display = "none";
    });

    // Убираем выделение с текущей активной маленькой изображения
    const activeSmallImgs = document.querySelectorAll(".small-img-active");
    activeSmallImgs.forEach((img) => {
        img.classList.remove("small-img-active");
        img.style.opacity = 1; // Возвращаем полную непрозрачность
    });

    // Устанавливаем новую большую картинку и отображаем ее
    bigImg.src = newSrc;
    bigImg.style.display = "block";

    // Добавляем класс "small-img-active" и прозрачность для новой активной маленькой картинки
    clickedImg.classList.add("small-img-active");
    clickedImg.style.opacity = 0.5;
}

// Функция для обратного отсчета
function countdown() {
    const timerElement = document.getElementById('countdown');
    const timerValue = timerElement.innerText;
    const timeParts = timerValue.split(':');
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    let seconds = parseInt(timeParts[2]);

    // Обновляем таймер каждую секунду
    const countdownInterval = setInterval(function () {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(countdownInterval);
            timerElement.innerText = 'Время истекло';
        } else {
            let newTimerValue = '';

            if (hours > 0) {
                newTimerValue += (hours < 10 ? '0' : '') + hours + ':';
            }

            newTimerValue += (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
            timerElement.innerText = newTimerValue;

            if (seconds === 0) {
                if (minutes === 0) {
                    hours--;
                    minutes = 59;
                } else {
                    minutes--;
                }
                seconds = 59;
            } else {
                seconds--;
            }
        }
    }, 1000);
}

// Запускаем обратный отсчет при загрузке страницы
countdown();