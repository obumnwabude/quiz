const nextButton = document.querySelector('#next-button');
const submitButton = document.querySelector('#submit-button');
const optionForm = document.querySelector('#option-form');
const questionContentP = document.querySelector('#question-content');
const optionInputs = document.querySelectorAll('.option input');
const optionContentSpans = document.querySelectorAll('.option-content');
let currentQuestion = 0;
const answeredOptions = [];
const qOptions = [
    {
        question: '2Jose Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        options: [
            '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
        ],
    },
    {
        question: '3Jose Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        options: [
            '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
        ],
    },
    {
        question: '4Jose Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        options: [
            '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
            '4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
        ],
    },
];

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
