const parentList = document.querySelector('.body-main-section-div1-lu-list');
const refreshButton = document.querySelector('.refreshButton');

export function refreshList() {
  
  parentList.innerHTML = ``;
  }

  localStorage.clear();

refreshButton.addEventListener('click', refreshList)