
/* let parseString = require('react-native-xml2js').parseString; */
/* let parseJson = require('xml2js').parseString; */


const url = 'http://www.grupochama.com.br/app/capas.xml';

const data_capas = [];
require('xmldom').DOMParser;


const list_capas =async () =>{

    return await fetch(url)

    .then(response =>response.text())
    
    .then(data=>{        
        
        let DOMParser = require('xmldom').DOMParser;

        let parser = new DOMParser();

        return parser.parseFromString(data, 'application/xml');              
        
    })
    
    

}
 buildImageList=(x)=>{
    /* let list = document.getElementById('houses'); */
    
    for(let i=0; i<capas.length; i++){
        
        let capa = capas[i].firstChild.nodeValue;
        console.log(capa) ;
       
    }

}


export const listAll = () =>{
    console.log(list_capas());
    
}
 