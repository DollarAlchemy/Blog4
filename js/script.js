// Full JavaScript Logic
const topics = ["topics/mastering-focus.html", "topics/breaking-free.html"];
const defaultPage = "default.html";
let pageHistory = [defaultPage];
let currentIndex = 0;
const iframe = document.getElementById("viewer");
const backButton = document.getElementById("back-btn");
const forwardButton = document.getElementById("forward-btn");
const clearButton = document.getElementById("clear-btn");
iframe.src = defaultPage;
updateButtonStates();
function updateButtonStates() {
    backButton.disabled = currentIndex <= 0;
    forwardButton.disabled = currentIndex >= pageHistory.length - 1;
}
backButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        iframe.src = pageHistory[currentIndex];
    }
    updateButtonStates();
});
forwardButton.addEventListener("click", () => {
    if (currentIndex < topics.length - 1) {
        currentIndex++;
        iframe.src = topics[currentIndex];
    }
    updateButtonStates();
});
clearButton.addEventListener("click", () => {
    pageHistory = [defaultPage];
    currentIndex = 0;
    iframe.src = defaultPage;
    updateButtonStates();
});