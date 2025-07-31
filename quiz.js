function checkAnswer() {
    const correctAnswer = "4";

    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById("feedback");

    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745";  // Green color for success
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545";  // Red color for error
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

