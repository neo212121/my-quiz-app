body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    color: #333;
}

.quiz-container {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    width: 650px;
    max-width: 90%;
    text-align: center;
}

h1 {
    font-size: 2em;
    color: #2c3e50;
    margin-bottom: 25px;
    border-bottom: 2px solid #3498db;
    display: inline-block;
    padding-bottom: 8px;
}

#question-text {
    font-size: 1.5em;
    color: #34495e;
    min-height: 80px;
    margin: 30px 0;
    line-height: 1.5;
    font-weight: bold;
}

.options-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;
}

.option-button {
    background-color: #ecf0f1;
    border: 1px solid #bdc3c7;
    border-radius: 8px;
    padding: 15px 20px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
    text-align: left;
    color: #34495e;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.option-button:hover {
    background-color: #e0e6e9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.option-button.correct {
    background-color: #2ecc71;
    border-color: #27ae60;
    color: white;
}

.option-button.incorrect {
    background-color: #e74c3c;
    border-color: #c0392b;
    color: white;
}

.hidden {
    display: none;
}

#result-area {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #ecf0f1;
}

#result-message {
    font-size: 1.6em;
    font-weight: bold;
    margin-bottom: 15px;
    transition: color 0.3s;
}

#result-message.correct {
    color: #2ecc71;
}

#result-message.incorrect {
    color: #e74c3c;
}

#explanation-box {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    text-align: left;
    margin-top: 15px;
    border-left: 4px solid #3498db;
    line-height: 1.6;
}

#next-button, #restart-button {
    padding: 12px 30px;
    font-size: 1.1em;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
    margin-top: 25px;
}

#next-button:hover, #restart-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

#quiz-end-area {
    margin-top: 30px;
}