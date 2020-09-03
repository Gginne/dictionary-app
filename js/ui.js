class UI{
    constructor(){
        
        //this.merriamLogo
    }

    renderCard(dict, data, name){
        let output = ``
        
        data.forEach((definition) => {
            
            if((definition.fl !== '' && definition.def !== '') && definition.fl && definition.def){
                output += `
                <li><b>fl. ${definition.fl}</b>
                <br>
                    ${definition.def}
                </li>
                <br>
                `
            } 
        });

        if(output == ''){
            output += `<li><h5>No definitions Found</h5></li>`
        }
        
        return ` 
        <div class="col s12 m6 l6">
          <div class="card">
          <div class="card-content"> 
          <div class="card-title">
          <span><h2>${name}</h2> </span>
          <span> <img src="./img/${dict} logo.png" width="100px" class="right-align"></span>
            </div>
            <ul>${output}</ul>
           
            
          </div>
          </div>
        </div>
       `
      
    }
    
}
