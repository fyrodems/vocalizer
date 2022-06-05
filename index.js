const spk = window.speechSynthesis;
console.log(spk)
console.dir(spk)

const voices = spk.getVoices()



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

    console.log(txt)
    console.log(txtToRead)

    spk.speak(txtToRead)
    console.log(spk)
    if (spk.speaking) {
        $('.logo').css('color', 'green')
    }



      const voices = window.speechSynthesis.getVoices()

      console.log(voices)

      for(let i = 0; i < voices.length ; i++) {
        //   if(voices[i].name === selectedOption) {
        //     txtToRead.voice = voices[i];
        //   }
        }

})

$('#pause').on('click', () => {
    const txt = $('textarea').val();
    const txtToRead = new SpeechSynthesisUtterance(txt);

    spk.pause(txtToRead)
})

