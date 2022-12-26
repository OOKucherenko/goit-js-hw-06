const refs = {
    controlInput: document.querySelector("#font-size-control"),
    textOutput:  document.querySelector("#text"), 
}

refs.textOutput.style.fontSize = `${refs.controlInput.value}px`;

refs.controlInput.addEventListener("input", (event) => {
    refs.textOutput.style.fontSize = `${event.currentTarget.value}px`;
});