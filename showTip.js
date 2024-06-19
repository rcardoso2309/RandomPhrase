const phrases = [
    "Being Irish, he had an abiding sense of tragedy, which sustained him through temporary periods of joy. - W.B. Yeats",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "May your troubles be less and your blessings be more, and nothing but happiness come through your door.",
    "Imagination is more important than knowledge. - Albert Einsten",
    "It's a lovely day for a pint of Guinness"
]


let counter = 0

function changePhrase(){
    const element = document.getElementById("phrase")
    element.textContent = phrases[counter]
    counter = counter + 1
    if(counter === phrases.length){
        counter = 0
    }
}
