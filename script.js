const quizArea = document.getElementById('quiz-area');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultArea = document.getElementById('result-area');
const resultMessage = document.getElementById('result-message');
const explanationText = document.getElementById('explanation-text');
const nextButton = document.getElementById('next-button');

let allQuestions = [];
let currentQuestionIndex = 0;
let randomQuestions = [];

// 수정된 코드 시작
fetch('allQZ.csv')
    .then(response => response.arrayBuffer()) // 파일을 텍스트 대신 바이너리 데이터로 가져옵니다.
    .then(buffer => {
        // TextDecoder를 사용하여 바이너리 데이터를 UTF-8 텍스트로 변환합니다.
        const decoder = new TextDecoder('utf-8');
        const data = decoder.decode(buffer);
        
        // CSV 데이터 파싱
        allQuestions = data.split('\n').map(row => {
            const cells = row.split(',');
            // CSV 파일의 마지막 줄에 빈 줄이 있을 수 있으므로, 유효한 데이터만 처리합니다.
            if (cells[1] && cells[2]) {
                 return {
                    question: cells[1].trim(),
                    options: [
                        cells[2].trim(), 
                        cells[3].trim(), 
                        cells[4].trim(), 
                        cells[5].trim(), 
                        cells[6].trim()
                    ],
                    answer: cells[7].trim(),
                    explanation: cells[8] ? cells[8].trim() : ''
                };
            }
            return null;
        }).filter(item => item !== null); // null 값(빈 줄) 제거

        // 첫 번째 헤더 행은 문제 데이터가 아니므로 제거
        if (allQuestions.length > 0 && allQuestions[0].question === "문제") {
            allQuestions.shift();
        }

        startQuiz();
    });

// (아래의 startQuiz, showQuestion, checkAnswer, nextButton 이벤트 리스너 코드는 그대로 유지)
function startQuiz() {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    randomQuestions = shuffledQuestions.slice(0, 10);
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = randomQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        optionButton.addEventListener('click', () => checkAnswer(optionButton, index + 1, currentQuestion));
        optionsContainer.appendChild(optionButton);
    });
    resultArea.classList.add('hidden');
}

function checkAnswer(selectedButton, selectedOptionIndex, question) {
    const isCorrect = (selectedOptionIndex.toString() === question.answer);
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });
    if (isCorrect) {
        selectedButton.classList.add('correct');
        resultMessage.textContent = '정답입니다! 🎉';
    } else {
        selectedButton.classList.add('incorrect');
        resultMessage.textContent = '아쉽게도 틀렸습니다. 😞';
    }
    explanationText.textContent = question.explanation;
    resultArea.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < randomQuestions.length) {
        showQuestion();
    } else {
        alert('퀴즈 10문제가 모두 끝났습니다! 다시 시작할게요.');
        startQuiz();
    }
});