
 formatterDate = ( date) =>{
    
    const oldDate = date.split('/').reverse().join('-');
    const meses = ["Janeiro","Fevereiro","Março","Abril","Maio",
    "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    return oldDate[0]+" de "+ meses[oldDate[1]] + " de " + oldDate[2]; 
    return "Danilo";
}
