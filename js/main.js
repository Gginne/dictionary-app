//Init 
let def = new Definition()
let ui = new UI()


//Get Word
const wordInput = document.querySelector("#dict_input")

//Event Listeners
wordInput.addEventListener('input', e => {
    let word = wordInput.value
    def.requestMerriam(word).then(data => {
        ui.renderCard(data, word)
        
        console.log(data)
    
    })  
    
})