import { getData, miArrayRecuperado } from "./getFromLocalStorage";

const parentList = document.querySelector('.body-main-section-div1-lu-list');

export function createList(index) {
 
  getData();
  const scoreList = document.createElement('li');
  parentList.appendChild(scoreList);
  scoreList.innerHTML = `${miArrayRecuperado[index].index}` + ' ' +`${miArrayRecuperado[index].name}` + ' ' +`${miArrayRecuperado[index].score}`;
  if (index % 2 !== 0) {
    scoreList.classList.add('makeMeGray');
  };
}