const hora = 10;

if(hora < 24){ 
    if(hora >= 0 && hora <= 11){
        console.log('Bom dia');
    }else if(hora >= 12 && hora <= 17){
        console.log('Boa tarde');
    }else if(hora>=18 && hora <=23){
        console.log('Boa noite');
    }
}else if(hora < 0 || hora > 24){
    console.log('Sai dai');
}