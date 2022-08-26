function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener("click", onCreate);

function onCreate(event) {
  const userQuantity = inputEl.value;
  let divArray = [];
  for(let i = 0; i < userQuantity; i += 1 ) {
    divArray.push(`<div style="width:${30 + 10 * i}px; height:${30 + 10 * i}px; background-color:${getRandomHexColor()}"></div>`); 
    console.log(divArray);
  }
  const divJoined = divArray.join("")
  boxesEl.insertAdjacentHTML("afterbegin", divJoined);
}

buttonDestroyEl.addEventListener("click", onDestroy);

function onDestroy(event) {

  boxesEl.textContent = "";

}


