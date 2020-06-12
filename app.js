const optionForm = document.querySelector("#option-form");

optionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let options = Object.fromEntries(new FormData(optionForm));
    console.log(options);
})
