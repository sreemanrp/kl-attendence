const lectureInput = document.getElementById('lecture');
const tutorialInput = document.getElementById('tutorial');
const practicalInput = document.getElementById('practical');
const skillInput = document.getElementById('skill');
const calculateButton = document.getElementById('calculateButton');
const resultDiv = document.getElementById('result');
const totalPercentageDiv = document.getElementById('totalPercentage');
const errorMessageDiv = document.getElementById('errorMessage');
const timerDiv = document.getElementById('timer');

let remainingTime = localStorage.getItem('remainingTime');

if (remainingTime === null) {
    remainingTime = 17 * 60 * 60; // 17 hours in seconds
} else {
    remainingTime = parseInt(remainingTime, 10);
}

function updateTimer() {
    const interval = setInterval(function() {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        timerDiv.innerHTML = `<div style="text-align: left;"><span style="color: #fff500;">Next update at:</span> <span style="color: #fff500; text-decoration: 1px white underline;">${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s</span></div>`;

        if (remainingTime <= 0) {
            clearInterval(interval);
            timerDiv.innerHTML = `<div style="text-align: left;"><span style="color: #50e3c2;">Updates are live!</span></div>`;
            localStorage.removeItem('remainingTime');
        } else {
            remainingTime--;
            localStorage.setItem('remainingTime', remainingTime);
        }
    }, 1000);
}

updateTimer();

function checkInputs() {
    let filledCount = 0;
    if (lectureInput.value !== '') filledCount++;
    if (tutorialInput.value !== '') filledCount++;
    if (practicalInput.value !== '') filledCount++;
    if (skillInput.value !== '') filledCount++;
    calculateButton.disabled = filledCount < 2;
}

lectureInput.addEventListener('input', checkInputs);
tutorialInput.addEventListener('input', checkInputs);
practicalInput.addEventListener('input', checkInputs);
skillInput.addEventListener('input', checkInputs);

calculateButton.addEventListener('click', function() {
    let lecture = parseFloat(lectureInput.value) || 0;
    let tutorial = parseFloat(tutorialInput.value) || 0;
    let practical = parseFloat(practicalInput.value) || 0;
    let skill = parseFloat(skillInput.value) || 0;

    let count = 0;
    let total = 0;

    if (lectureInput.value !== '') { total += lecture; count++; }
    if (tutorialInput.value !== '') { total += tutorial; count++; }
    if (practicalInput.value !== '') { total += practical; count++; }
    if (skillInput.value !== '') { total += skill; count++; }

    if (count === 0) {
        errorMessageDiv.textContent = "Please enter your attendance.";
        resultDiv.textContent = "";
        totalPercentageDiv.textContent = "";
        return;
    } else {
        errorMessageDiv.textContent = "";
    }

    const average = count > 0 ? total / count : 0;
    let percentageColor = "";

    if (average < 75) {
        percentageColor = "#ff3333";
    } else if (average >= 75 && average <= 85) {
        percentageColor = "#fff500";
    } else {
        percentageColor = "#50e3c2";
    }

    totalPercentageDiv.innerHTML = `Total Percentage: <span style="color: ${percentageColor};">${average.toFixed(2)}%</span>`;

    if (average < 75) {
        resultDiv.textContent = "Attend classes regularly or you will be detained for that subject and cannot write the exams.";
    } else if (average >= 75 && average <= 85) {
        resultDiv.textContent = "You need to pay the condonation fee and are eligible to write the exams.";
    } else {
        resultDiv.textContent = "You are in the safe zone and are eligible to write the exams.";
    }
    setTimeout(function() {
        location.reload();
    }, 5000);

});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});
