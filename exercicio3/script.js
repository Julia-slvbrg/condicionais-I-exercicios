//let nacionalidade = prompt('Escreva aqui a sua nacionalidade').toLowerCase()

/* 
if(nacionalidade === "brasileira"){
    console.log('Sua nacionalidade é brasileira')
}else if(nacionalidade === "argentina"){
    console.log('Sua nacionalidade é argentina')
}else if(nacionalidade === "uruguaia"){
    console.log('Sua nacionalidade é uruguaia')
}else if(nacionalidade === "chilena"){
    console.log('Sua nacionalidade é chilena')
}else if(nacionalidade === "colombiana"){
    console.log('Sua nacionalidade é colombiana')
}else{
    console.log('Nacionalidade não encontrada')
}
*/


//Outra forma de se fazer (para fazer essa tem que tirar a variável lá de cima dos parentêses):

/* 
if(
    nacionalidade === "brasileira" ||
    nacionalidade === "argentina"  ||
    nacionalidade === "uruguaia" ||
    nacionalidade === "chilena" ||
    nacionalidade === "colombiana"
){
    console.log(`A sua nacionalidade é ${nacionalidade}`)
}else {
    console.log(`Nacionalidade não encontrada`)
}
*/

//Mais outra forma de fazer

const nacionalidadeArray = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]


function confereNacionalidade(nacionalidade){
    const resposta = prompt('Escreva a sua nacionalidade').toLowerCase()
    if(nacionalidadeArray.includes(resposta)){
    console.log(`Sua nacionalidade é ${resposta}`)    
}else{
    console.log(`Nacionalidade não encontrada`)
}
}

confereNacionalidade()
confereNacionalidade()