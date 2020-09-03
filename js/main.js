//Init 
let def = new Definition()
let ui = new UI()


//Get Word
const wordInput = document.querySelector("#dict_input")

//Container
const container = document.querySelector('#dict_output')

//Event Listeners
wordInput.addEventListener('input', async e => {
    let word = wordInput.value
    const merriamData = await def.requestMerriam(word)
    container.innerHTML = ui.renderCard("merriam", merriamData, word)
    
})