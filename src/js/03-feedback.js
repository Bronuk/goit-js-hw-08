import throttle from 'lodash.throttle';

// const input = document.querySelector('input');
// const textarea = document.querySelector('textarea')
// const button = document.querySelector('button')

const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    emailField: document.querySelector('.feedback-form input'),
    messageField: document.querySelector('.feedback-form textarea'),
    submitButton: document.querySelector('.feedback-form button')
};

fillInTextData();
refs.emailField.addEventListener('input', saveInputValue);
refs.messageField.addEventListener('input', throttle(saveInputValue, 3000));
refs.submitButton.addEventListener('click', clickSubmitButton);

let textToSave = {
    email:'',
    message:''
};

function saveInputValue(event){
    textToSave.email = refs.emailField.value
    textToSave.message = refs.messageField.value
    localStorage.setItem('feedback-form-state', JSON.stringify(textToSave));
}

function clickSubmitButton(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    refs.feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
}

function fillInTextData(){
    if(localStorage.getItem('feedback-form-state')){
// console.log(localStorage.getItem('feedback-form-state'));
// console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    const textFromLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
    refs.messageField.value = textFromLocalStorage['message'];
    refs.emailField.value = textFromLocalStorage['email'];
}
}
// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }

// const refs = {
//     feedbackForm: document.querySelector('.feedback-form'),
//     input: document.querySelector('.feedback-form input'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     button: document.querySelector('.feedback-form button')
// };

// refs.button.addEventListener('click', submitButton);
// refs.feedbackForm.addEventListener('input', inputForm);
// // refs.feedbackForm.addEventListener('input', throttle(inputForm, 500));

// function submitButton(event) {
//     event.preventDefault();
//     console.log('Submit');
// }

// function inputForm(event) {
//     const inputText = event.currentTarget.element;

//     const mail = inputText.email.value;
//     const message = inputText.message.value;
//     const saveData = {
//         mail,
//         message,
//     };
    // localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
    // const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    // console.log(formData)


// ==========================ALT=======================


// const inputText = {}

// const refs = {
//     feedbackForm: document.querySelector('.feedback-form'),
//     input: document.querySelector('.feedback-form input'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     button: document.querySelector('.feedback-form button')
// };

// refs.feedbackForm.addEventListener('submit', submitButton);
// refs.feedbackForm.addEventListener('input', throttle(inputForm, 500));

// populateTextInput()

// function inputForm(event) {
//     inputText[event.target.name] = event.target.value;
//     console.log(inputText);
//     localStorage.setItem('feedback-form-state', JSON.stringify(inputText));
// }

// function submitButton(event) {
//     event.preventDefault();
//     event.currentTarget.reset();
//     localStorage.removeItem('feedback-form-state');
//     console.log('delete text');
// }


// function populateTextInput() {
//     const userData = JSON.parse(localStorage.getItem('feedback-form-state'));
//     if(userData && Object.values(userData) !== [ ] ) {
//         form.email.value = userData.email;
//         form.message.value = userData.message;
//         formData.email = userData.email;
//         formData.message = userData.message;
//     };
// };

// ==========================ALT=======================

// const refs = {
//     feedbackForm: document.querySelector('.feedback-form'),
//     input: document.querySelector('.feedback-form input'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     button: document.querySelector('.feedback-form button')
// };

// const throttledInpudChanges = throttle(fidbackChange, 500)

// refs.feedbackForm.addEventListener('input', throttledInpudChanges);

// function fidbackChange(event) {
//     console.log(event.target.value);
// }

// refs.button.addEventListener('submit', inputSubmit);

// function inputSubmit(event) {
//     event.preventDefault();
// };
