const borderInput = document.querySelector('#validation-input');
console.log("inputEl", borderInput)
borderInput.addEventListener("blur", (event) => {
    borderInput.value.trim().length == borderInput.dataset.length
        ? borderInput.classList.remove('invalid') || borderInput.classList.add('valid') 
        : borderInput.classList.add('invalid');
})