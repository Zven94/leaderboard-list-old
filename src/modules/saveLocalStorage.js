const arrayList = [];

export function saveLocalStorage(name, score, index) {
  const objList = {
    name: name,
    score: score,
    index: index,
  };
  arrayList.push(objList);
  const arrayListString = JSON.stringify(arrayList);
  localStorage.setItem("arrayListStringKey", arrayListString);
}