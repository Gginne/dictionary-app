//Init 
let def = new Definition()
let ui = new UI()


//Get Word
const wordInput = document.querySelector("#dict_input")

//Event Listeners
wordInput.addEventListener('input', async e => {
    let word = wordInput.value
    const merriam = await def.requestMerriam(word)
    ui.renderCard(merriam, word)
    const oxford = await def.requestOxford(word)
    console.log(oxford)
    
})