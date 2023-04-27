const ambilText = document.querySelector("textarea"),
voiceList = document.querySelector("select"),
soundBtn = document.querySelector("button");

function textToSpeech(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utternance);
    
}

soundBtn.addEventListener("click", e => {
    e.preventDefault();
    if (ambilText.value !== "") {
        textToSpeech(ambilText.value);
    }
});