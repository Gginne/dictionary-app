require("dotenv").config()

class Definition{
    constructor(){
        this.merriamKey = process.env.MERRIAM_KEY
    }

    async requestMerriam(word){
        let res = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${this.merriamKey}`)
        let json = await res.json()

        let data = []
        json.forEach((def) => {
            let dataObj = {}
            dataObj.fl = def.fl
            dataObj.def = def.shortdef
            if(!(dataObj in data)){
                data.push(dataObj)
            }    
        })
        return data
    }

    async requestOxford(){
       
    }
}

//Test:
