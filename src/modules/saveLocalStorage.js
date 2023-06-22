const arrayList = [];

export default function saveLocalStorage(name, score, index) {
  const objList = {
    name,
    score,
    index,
  };
  arrayList.push(objList);
  const arrayListString = JSON.stringify(arrayList);
  localStorage.setItem('arrayListStringKey', arrayListString);
}