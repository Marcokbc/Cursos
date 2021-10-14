for(i=0;i<=500;i+=10){
    console.log('linha '+i);
}
for(i=0;i<=10;i++){
    const parImpar = i % 2 === 0?'par' : 'impar';
    console.log(i,parImpar);
}

const frutas = ["Maça", "Pera", "Uva"];
for (let i = 0;i< frutas.length;i++ ){
    console.log("Esta fruta é: " + frutas[i]);
}

for(i = 100; i>10;i--){
    console.log(i);
}