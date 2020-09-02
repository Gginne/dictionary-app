class UI{
    constructor(){
        this.output = document.querySelector('#dict_output')
        //this.merriamLogo
    }

    renderCard(data, name){
        let output = ``
        
        data.forEach((definition) => {
            
            if((definition.fl !== '' && definition.def !== '') && definition.fl && definition.def){
                output += `
                <li><b>fl. ${definition.fl}</b>
                <br>
                ${definition.def}
                </li><br>`
            } 

        });

        if(output == ''){
            output += `<li><h5>No definitions Found</h5></li>`
        }
        
        let card = 
        ` 
        <div class="col s12 m6 l12">
          <div class="card">
          <div class="card-content"> 
          <div class="card-title">
          <span><h2>${name}</h2> </span>
          <span> <img src="./img/merriam logo.png" width="100px" class="right-align"></span>
            </div>
            <ul>${output}</ul>
           
            
          </div>
          </div>
        </div>
       `
      this.output.innerHTML = name !== '' ? card : '' 
    }
    
}