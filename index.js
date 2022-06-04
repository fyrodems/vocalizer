const spk = window.speechSynthesis;
console.log(spk)

console.log(spk.getVoices())


$('#play').on('click', () => {
    const txt = $('textarea').val();
    const txtToRead = new SpeechSynthesisUtterance(txt);

    txtToRead.volume = $('#volume').val();
    txtToRead.pitch = $('#pitch').val();
    txtToRead.rate = Number($('#speed').val());

    txtToRead.onend = event => {
        $('.logo').css('color', 'red')
     }

    console.log(txt)
    console.log(txtToRead)

    spk.speak(txtToRead)
    console.log(spk)
    if (spk.speaking) {
        $('.logo').css('color', 'green')
    }
})



$('#pause').on('click', () => {

})



// if (spk.speaking) {
//     document.querySelector('.logo').style.color = 'green'
// }


