
const startHandler = (utterance) => {
    utterance.onstart = () => {
        $('.logo').css('color', '#93c47d')
    }
}

const endHandler = (utterance) => {
    utterance.onend = () => {
        $('.logo').css('color', '#3d85c6')
    }
}


export {
    startHandler,
    endHandler
}