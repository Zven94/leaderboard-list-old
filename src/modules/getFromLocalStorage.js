export let miArrayRecuperado = [];

export function getData() {
const arrayString = localStorage.getItem("arrayListStringKey");
miArrayRecuperado = JSON.parse(arrayString);
}

