import {qOptions} from './questions.js';
const nextButton = document.querySelector('#next-button');
const submitButton = document.querySelector('#submit-button');
const optionForm = document.querySelector('#option-form');
const questionContentP = document.querySelector('#question-content');
const optionInputs = document.querySelectorAll('.option input');
const optionContentSpans = document.querySelectorAll('.option-content');
let currentQuestion = 0;
const answeredOptions = [];
const changeDOMQuestion = (qOption) => {
    questionContentP.textContent = qOption.question;
    optionContentSpans.forEach((span, index) => {
        span.textContent = qOption.options[index];
    });
    optionInputs.forEach((input) => {
        if (input.checked) {
            input.checked = false;
        }
    });
};

const changeQuestion = () => {    
    if (currentQuestion === (qOptions.length - 2)) {
        nextButton.disabled = true;
        submitButton.disabled = false;
    }
    ++currentQuestion;
    changeDOMQuestion(qOptions[currentQuestion]);
};

optionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let answeredOption = Object.fromEntries(new FormData(optionForm));
    answeredOptions.push(answeredOption.option);
    if (currentQuestion === (qOptions.length - 1)) {
        alert(`your answers are ${answeredOptions}`);
    } else {
        changeQuestion();
    }
});
