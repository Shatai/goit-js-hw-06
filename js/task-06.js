const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener("blur",(event) => {
    if(+inputEl.dataset.length === event.target.value.length) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
        
    }
    else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');

    }

});