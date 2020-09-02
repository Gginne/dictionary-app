class Definition{
    constructor(){
        
        this.merriamKey = '4ff5c852-7b71-4675-b9cf-bd1efbaf2af8'
        this.oxfordID = '079757f375b618a23b9fcf002448bfbc'
        this.oxfordID = 'cbeeeb41'
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
