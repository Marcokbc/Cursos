const numeros = [1,2,3,4,5,6,7];

for(let numero of numeros){
    if(numero === 2){
        continue;//Ele continua para proxima interação do laço
    }
    if(numero === 7){
        break;//Para o laço nesse momento
    }
    console.log(numero);
}
//Se for while ou do while tem que atualizar a variavel de controle antes do continue ou do break