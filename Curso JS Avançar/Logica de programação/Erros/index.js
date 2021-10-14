function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y tem que ser numeros.');
    }else{
        return x+y;
    }
}

try{ 
console.log(soma('1',2));
}catch(error){
    console.log(error);
}