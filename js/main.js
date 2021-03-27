//Init 
let def = new Definition()
let ui = new UI()


//Get Word
const wordInput = document.querySelector("#dict_input")

//Container
const container = document.querySelector('#dict_output')

//Event Listeners
wordInput.addEventListener('keyup', async e => {
    let word = e.target.value
    if(word === ""){
        container.innerHTML = ""
    } else if(e.keyCode === 13){
        const merriamData = await def.requestMerriam(word)
        const oxfordData = await def.requestOxford(word)
        container.innerHTML = ui.renderCard("merriam", merriamData, word) + ui.renderCard("oxford", oxfordData, word)  
    }

    
})