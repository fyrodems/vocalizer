const speak = window.speechSynthesis;

const usersText = document.querySelector('#text').value;

const volumeInput = $('#volume');
const volumeValue = volumeInput.val();

const speedInput = $('#speed');
const sppedValue = speedInput.val();

const pitchInput = $('#pitch');
const pitchValue = pitchInput.val();

export {
    speak, 
    usersText, 
    volumeInput, 
    volumeValue, 
    speedInput, 
    sppedValue, 
    pitchInput, 
    pitchValue
}