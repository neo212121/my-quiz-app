const quizArea = document.getElementById('quiz-area');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultArea = document.getElementById('result-area');
const resultMessage = document.getElementById('result-message');
const explanationText = document.getElementById('explanation-text');
const nextButton = document.getElementById('next-button');
const quizEndArea = document.getElementById('quiz-end-area');
const restartButton = document.getElementById('restart-button');

let allQuestions = [];
let currentQuestionIndex = 0;
let randomQuestions = [];

fetch('allQZ.csv')
    .then(response => response.arrayBuffer())
    .then(buffer => {
        const decoder = new TextDecoder('utf-8');
        const data = decoder.decode(buffer);

        allQuestions = data.split('\n').map(row => {
            const cells = row.split(',');
            if (cells.length >= 9) {
                 return {
                    question: cells[1] ? cells[1].trim() : '',
                    options: [
                        cells[2] ? cells[2].trim() : '',
                        cells[3] ? cells[3].trim() : '',
                        cells[4] ? cells[4].trim() : '',
                        cells[5] ? cells[5].trim() : '',
                        cells[6] ? cells[6].trim() : ''
                    ],
                    answer: cells[7] ? cells[7].trim() : '',
                    explanation: cells[8] ? cells[8].trim() : ''
                };
            }
            return null;
        }).filter(item => item !== null);

        if (allQuestions.length > 0 && allQuestions[0].question === "문제") {
            allQuestions.shift();
        }

        if (allQuestions.length === 0) {
            questionText.textContent = "퀴즈 데이터를 불러오지 못했습니다. CSV 파일을 확인해주세요.";
            return;
        }

        startQuiz();
    });

function startQuiz() {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    randomQuestions = shuffledQuestions.slice(0, 10);
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = randomQuestions[currentQuestionIndex];
    if (!currentQuestion) {
        questionText.textContent = "퀴즈 문제가 부족합니다. 엑셀 파일에 10개 이상의 문제가 있는지 확인해주세요.";
        return;
    }
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = `${index + 1}. ${option}`;
        optionButton.classList.add('option-button');
        optionButton.addEventListener('click', () => checkAnswer(optionButton, index + 1, currentQuestion));
        optionsContainer.appendChild(optionButton);
    });
    resultArea.classList.add('hidden');
    resultMessage.classList.remove('correct', 'incorrect');
}

function checkAnswer(selectedButton, selectedOptionIndex, question) {
    const isCorrect = (selectedOptionIndex.toString() === question.answer);
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });

    if (isCorrect) {
        selectedButton.classList.add('correct');
        resultMessage.textContent = '정답입니다! 🎉';
        resultMessage.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
        resultMessage.textContent = '아쉽게도 틀렸습니다. 😞';
        resultMessage.classList.add('incorrect');
    }
    explanationText.textContent = question.explanation;
    resultArea.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < randomQuestions.length) {
        showQuestion();
    } else {
        quizArea.classList.add('hidden');
        resultArea.classList.add('hidden');
        quizEndArea.classList.remove('hidden');
    }
});

restartButton.addEventListener('click', () => {
    quizArea.classList.remove('hidden');
    quizEndArea.classList.add('hidden');
    startQuiz();
});