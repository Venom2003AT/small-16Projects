const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

updateCounter();

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length
    remainingCounterEl.innerText = 150 - totalCounterEl.innerText
}