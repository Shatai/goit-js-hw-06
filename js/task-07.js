const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

spanEl.style.fontSize = "56px";

inputEl.addEventListener('input', onBlur);

function onBlur() {
    spanEl.style.fontSize = `${inputEl.value}px`;
}