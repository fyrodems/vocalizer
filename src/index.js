import '../../vocalizer/style.scss';
import { usersText } from './constants'

const speech = window.speechSynthesis;
console.log(usersText)

        //define core txtToRead object
        //use this obj to paly, pause etc

$('#play').on('click', () => {
    const txt = $('textarea').val();
    const txtToRead = new SpeechSynthesisUtterance(txt);

    txtToRead.volume = $('#volume').val();
    txtToRead.pitch = $('#pitch').val();
    txtToRead.rate = Number($('#speed').val());

    txtToRead.onend = () => {
        $('.logo').css('color', 'red')
    }

    txtToRead.onstart = () => {
        $('.logo').css('color', 'green')
    }

    const voices = window.speechSynthesis.getVoices()

    for(let i = 0; i < voices.length ; i++) {
      console.log(voices[i].name, `lang:`, voices[i].lang)
    }

    speech.speak(txtToRead)
    console.log(txtToRead)
})


//not working:

// $('#pause').on('click', () => {
//     const txt = $('textarea').val();
//     const txtToRead = new SpeechSynthesisUtterance(txt);

//     speech.pause(txtToRead)
// })

