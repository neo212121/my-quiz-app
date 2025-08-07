body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    color: #343a40;
}

.quiz-container {
    background: #ffffff;
    padding: 30px 50px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    width: 700px;
    max-width: 95%;
    text-align: center;
    border: 1px solid #dee2e6;
}

h1 {
    font-size: 2.2em;
    color: #495057;
    margin-bottom: 20px;
    border-bottom: 2px solid #007bff;
    display: inline-block;
    padding-bottom: 5px;
}

#question-text {
    font-size: 1.6em;
    color: #212529;
    min-height: 80px;
    margin: 20px 0;
    line-height: 1.5;
}

.options-grid {
    margin-top: 20px;
}

/* 각 보기 버튼을 한 줄씩 차지하도록 강제합니다. */
.option-button {
    display: block; /* 이 부분이 가장 중요합니다! */
    width: 100%;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 8px;
    padding: 15px 20px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    text-align: left;
    color: #495057;
    margin-bottom: 12px; /* 버튼 사이에 여백을 줍니다. */
}

.option-button:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
}

.option-button.correct {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
}

.option-button.incorrect {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
}

.hidden {
    display: none;
}

#result-area {
    margin-top: 25px;
    padding: 20px;
    border-top: 1px solid #e9ecef;
}

#explanation-box {
    background-color: #e9ecef;
    padding: 15px;
    border-radius: 8px;
    text-align: left;
    margin-top: 15px;
    border-left: 4px solid #007bff;
}

#result-message {
    font-size: 1.5em;
    font-weight: bold;
}

#result-message.correct {
    color: #28a745;
}

#result-message.incorrect {
    color: #dc3545;
}

#next-button, #restart-button {
    padding: 12px 25px;
    font-size: 1.1em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 20px;
}

#next-button:hover, #restart-button:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
}

#quiz-end-area {
    margin-top: 25px;
}