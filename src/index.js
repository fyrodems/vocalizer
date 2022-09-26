import '../style/main.scss';
import { startHandler, endHandler } from './eventHandlers';


const speech = window.speechSynthesis;

$('#play').on('click', () => {

    const text = $('textarea').val();
    const textToRead = new SpeechSynthesisUtterance(text);

    textToRead.volume = $('#volume').val();
    textToRead.pitch = $('#pitch').val();
    textToRead.rate = Number($('#rate').val());
    textToRead.lang = $('#voice').find(":selected").val();

    startHandler(textToRead);
    endHandler(textToRead);

    speech.speak(textToRead);
})


