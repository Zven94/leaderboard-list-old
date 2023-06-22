import createList from './createList';
import saveLocalStorage from './saveLocalStorage';

const inputName = document.querySelector('.inputName');
const inputScore = document.querySelector('.inputScore');
const inputButton = document.querySelector('.inputButton');
const errorMsg = document.querySelector('#inputError');
let index = 0;

export default function addNewScore() {
  if (inputName.value && inputScore.value) {
    errorMsg.classList.add('inputError-W');
    errorMsg.classList.remove('inputError-R');
    saveLocalStorage(inputName.value, inputScore.value, index);
    createList(index);
    index += 1;
  } else {
    errorMsg.classList.add('inputError-R');
    errorMsg.classList.remove('inputError-W');
    errorMsg.innerHTML = 'Please complete both fields';
  }
}

inputButton.addEventListener('click', addNewScore);