document.addEventListener("DOMContentLoaded", () => {
    const totalSeconds = 21 * 3600 + 46 * 60 + 45; // Total seconds for the timer
    const timerElement = document.getElementById('timer');
    const progressBar = document.querySelector('.progress-bar');
    const initialTotalSeconds = totalSeconds;
    let currentSeconds = totalSeconds;

    function updateTimer() {
        if (currentSeconds > 0) {
            currentSeconds--;
            const hours = Math.floor(currentSeconds / 3600);
            const minutes = Math.floor((currentSeconds % 3600) / 60);
            const seconds = currentSeconds % 60;
            timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            const progressPercentage = ((initialTotalSeconds - currentSeconds) / initialTotalSeconds) * 100;
            progressBar.style.width = `${progressPercentage}%`;

            setTimeout(updateTimer, 1000);
        }
    }

    updateTimer();
});
