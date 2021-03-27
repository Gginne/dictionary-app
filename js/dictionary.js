class Definition{
    constructor(){
        this.merriamKey = '4ff5c852-7b71-4675-b9cf-bd1efbaf2af8'
        this.oxfordKey = '079757f375b618a23b9fcf002448bfbc'
        this.oxfordID = 'cbeeeb41'
    }

    async requestMerriam(word){
        const res = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${this.merriamKey}`)
        const data = await res.json()
        console.log(data)
        let defs = []
        try{
            data.forEach((def) => {
                const {fl, shortdef} = def
                const defObj = {fl, def: shortdef}
                if(!(defObj in defs)){
                    defs.push(defObj)
                }    
            })
        } catch(err){
            console.log(err)
        }
        return defs
    }

    async requestOxford(word){
       const headers = new Headers({
           "app_id": this.oxfordID, 
           "app_key": this.oxfordKey,
        })
       const proxy = "https://cors-anywhere.herokuapp.com"
       const res = await fetch(`${proxy}/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}`, {
            headers
       })
       const data = await res.json()
       console.log(data)
       let defs = []
       try{
            const fl = data.results[0].lexicalEntries[0].lexicalCategory.id
            data.results[0].lexicalEntries.forEach(({entries, lexicalCategory}) => {
                const fl = lexicalCategory.id
                const defObjs = entries[0].senses.map(({definitions}) => ({fl, def: definitions[0]}))
                defs = [...defObjs, ...defs]
            })
        } catch(err){
            console.log(err)
        }
       
       return defs
    }
}

//Test:
