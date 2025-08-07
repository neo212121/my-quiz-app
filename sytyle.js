body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.quiz-container {
    background: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 600px;
    max-width: 90%;
    text-align: center;
}

#question-text {
    font-size: 1.5em;
    color: #333;
    min-height: 80px;
}

.options-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.option-button {
    background-color: #e2e8f0;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 15px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: left;
}

.option-button:hover {
    background-color: #d1d5db;
}

.option-button.correct {
    background-color: #d4edda;
    border-color: #c3e6cb;
}

.option-button.incorrect {
    background-color: #f8d7da;
    border-color: #f5c6cb;
}

.hidden {
    display: none;
}

#result-area {
    margin-top: 20px;
}

#explanation-box {
    background-color: #f0f4f8;
    padding: 15px;
    border-radius: 8px;
    text-align: left;
    margin-top: 10px;
}