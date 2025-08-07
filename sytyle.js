body {
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f7f9fc;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    color: #333;
}

.quiz-container {
    background-color: #ffffff;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
    width: 600px;
    max-width: 90%;
    text-align: center;
    border: 1px solid #e0e6ed;
}

h1 {
    font-size: 2.2rem;
    color: #1e3a8a;
    margin-bottom: 1.5rem;
    border-bottom: 3px solid #3b82f6;
    display: inline-block;
    padding-bottom: 0.5rem;
}

#question-text {
    font-size: 1.6rem;
    color: #1f2937;
    min-height: 5rem;
    margin: 2rem 0;
    line-height: 1.6;
    font-weight: 600;
}

#options-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
}

.option-button {
    background-color: #f0f4f8;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: left;
    color: #4b5563;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.option-button:hover {
    background-color: #e5e7eb;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.option-button.correct {
    background-color: #dcfce7;
    border-color: #4ade80;
    color: #166534;
    font-weight: 600;
}

.option-button.incorrect {
    background-color: #fee2e2;
    border-color: #f87171;
    color: #991b1b;
    font-weight: 600;
}

.hidden {
    display: none;
}

#result-area {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
}

#result-message {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
    transition: color 0.3s;
}

#result-message.correct {
    color: #16a34a;
}

#result-message.incorrect {
    color: #ef4444;
}

#explanation-box {
    background-color: #f1f5f9;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: left;
    margin-top: 1rem;
    border-left: 4px solid #3b82f6;
    line-height: 1.6;
    color: #4b5563;
}

#next-button, #restart-button {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 1.5rem;
    font-weight: 600;
}

#next-button:hover, #restart-button:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

#quiz-end-area {
    margin-top: 2rem;
}

#quiz-end-area h2 {
    font-size: 1.8rem;
    color: #1e3a8a;
}
#quiz-end-area p {
    font-size: 1.2rem;
    margin: 1rem 0;
}
#quiz-end-area #correct-count {
    color: #16a34a;
    font-weight: bold;
}
#quiz-end-area #accuracy-rate {
    color: #3b82f6;
    font-weight: bold;
}

@media (max-width: 768px) {
    .quiz-container {
        padding: 1.5rem;
    }
    h1 {
        font-size: 1.8rem;
    }
    #question-text {
        font-size: 1.4rem;
        min-height: 4rem;
    }
    .option-button {
        font-size: 1.1rem;
        padding: 0.75rem 1rem;
    }
}
