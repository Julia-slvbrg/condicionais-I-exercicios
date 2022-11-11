let idade;
let terminouEnsinoMedio;
let isCursandoOutraFaculdade;

/* Sem a função, só com if/else:

idade = 25

if(idade >= 18){
    console.log('A pessoa é maior de idade')
}else{
	console.log('A pessoa é menor de idade')
}

terminouEnsinoMedio = true

if(terminouEnsinoMedio == true){
    console.log('A pessoa terminou o ensino médio')
}else{
    console.log('A pessoa não terminou o ensino médio')
}

isCursandoOutraFaculdade = false

if(!isCursandoOutraFaculdade == true){
    console.log('A pessoa não está cursando alguma faculdade')
}else{
    console.log('A pessoa está cursando alguma faculdade')
}
 */


function conferencia(idade,terminouEnsinoMedio, isCursandoOutraFaculdade){
    if(idade >= 18){
        console.log('A pessoa é maior de idade')
    }else{
        console.log('A pessoa é menor de idade')
    }
    if(terminouEnsinoMedio == true){
        console.log('A pessoa terminou o ensino médio')
    }else{
        console.log('A pessoa não terminou o ensino médio')
    }
    if(!isCursandoOutraFaculdade == true){
        console.log('A pessoa não está cursando alguma faculdade')
    }else{
        console.log('A pessoa está cursando alguma faculdade')
    }
}

conferencia(19, true, true)

conferencia(6, true, false)