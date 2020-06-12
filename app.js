const optionForm = document.querySelector('#option-form');
const questionContentP = document.querySelector('#question-content');
const optionContentSpans = document.querySelectorAll('.option-content');
const qOption = {
    question: 'Jose Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    options: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
        '3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
        '4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp',
    ],
};

const changeQuestions = (qOption) => {
    questionContentP.textContent = qOption.question;
    optionContentSpans.forEach((span, index) => {
        span.textContent = qOption.options[index];
    });
};

optionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let options = Object.fromEntries(new FormData(optionForm));
    console.log(options);
    changeQuestions(qOption);
});
