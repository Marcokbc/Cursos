function retornaHora(data){
    if(data && !(data instanceof Date)){//Instancia
        throw new TypeError('Esperando instancia de Date.');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false //Para que o horario n seja de 12 horas 
    });
}
try{
    //Não ha erros
    const data = new Date('01-01-1970 12:58:10');
    const hora = retornaHora(11);
    console.log(hora);
}catch(e){
    //ha erros
}finally{
    //Sempre
    console.log('Tenha um bom dia.')
}
