const msgEl = document.getElementById('msg');
const randomNum = getRandomNumber();
console.log("Number :", randomNum);
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}