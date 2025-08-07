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

// 1단계: CSV 파일을 불러와서 읽습니다.
fetch('allQZ.csv')
    .then(response => response.text())
    .then(data => {
        // CSV 내용을 줄 단위로 나누고, 각 줄을 쉼표로 나눠서 문제 데이터로 만듭니다.
        // 첫 번째 줄은 제목이므로 건너뜁니다.
        allQuestions = data.split('\n').slice(1).map(row => {
            const cells = row.split(',');
            // B셀(문제), C~G셀(보기), H셀(정답), I셀(해설)을 가져옵니다.
            return {
                question: cells[1],
                options: [cells[2], cells[3], cells[4], cells[5], cells[6]],
                answer: cells[7],
                explanation: cells[8]
            };
        });
        startQuiz();
    });

// 2단계: 퀴즈를 시작하고 10개의 문제를 랜덤으로 고릅니다.
function startQuiz() {
    // 전체 문제 중에서 10개를 무작위로 선택합니다.
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    randomQuestions = shuffledQuestions.slice(0, 10);
    currentQuestionIndex = 0;
    showQuestion();
}

// 3단계: 현재 문제를 화면에 보여줍니다.
function showQuestion() {
    const currentQuestion = randomQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ''; // 이전 보기들을 모두 지웁니다.

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        
        // 버튼을 클릭했을 때 정답을 확인하는 기능을 추가합니다.
        optionButton.addEventListener('click', () => checkAnswer(optionButton, index + 1, currentQuestion));
        optionsContainer.appendChild(optionButton);
    });

    resultArea.classList.add('hidden'); // 결과 영역을 숨깁니다.
}

// 4단계: 사용자가 선택한 답이 맞는지 확인합니다.
function checkAnswer(selectedButton, selectedOptionIndex, question) {
    const isCorrect = (selectedOptionIndex.toString() === question.answer.trim());
    
    // 모든 보기 버튼을 클릭할 수 없게 만듭니다.
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });

    // 정답인지 오답인지에 따라 버튼 색상을 바꿔줍니다.
    if (isCorrect) {
        selectedButton.classList.add('correct');
        resultMessage.textContent = '정답입니다! 🎉';
    } else {
        selectedButton.classList.add('incorrect');
        resultMessage.textContent = '아쉽게도 틀렸습니다. 😞';
    }

    // 해설을 보여줍니다.
    explanationText.textContent = question.explanation;
    resultArea.classList.remove('hidden');
}

// 5단계: 다음 문제로 넘어가는 버튼의 기능을 추가합니다.
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < randomQuestions.length) {
        showQuestion(); // 다음 문제가 있으면 보여줍니다.
    } else {
        alert('퀴즈 10문제가 모두 끝났습니다! 다시 시작할게요.');
        startQuiz(); // 퀴즈가 끝나면 다시 시작합니다.
    }
});