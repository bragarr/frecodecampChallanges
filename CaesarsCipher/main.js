function rot13(str) {
    
    let transcriptedMessage = "";

    const message = str.toLowerCase();
    const alphabetPartOne = [...Array(13)].map((_, i) => String.fromCharCode(i + 97));
    const alphabetPartTwo = [...Array(13)].map((_, i) => String.fromCharCode(i + 110));

    for(let i=0; i < message.length; i++) {
        if(alphabetPartOne.includes(message[i])) {
            let positionToTranscriptPartOne = alphabetPartOne.indexOf(message[i]);
            transcriptedMessage += alphabetPartTwo[positionToTranscriptPartOne];
        } else if(alphabetPartTwo.includes(message[i])) {
            let positionToTranscriptPartTwo = alphabetPartTwo.indexOf(message[i]);
            transcriptedMessage += alphabetPartOne[positionToTranscriptPartTwo];
        } else {
            transcriptedMessage += message[i];
        }
    }
    return transcriptedMessage.toUpperCase();
}

rot13("SERR PBQR PNZC");