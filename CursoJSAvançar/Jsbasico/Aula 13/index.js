const nome = prompt('Seu nome é: ');

document.body.innerHTML += `O seu nome é: ${nome}<br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é:  ${nome[1]} <br />`;
document.body.innerHTML += `O indicie da primeira letra a do seu nome é:  ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `O indicie da ultima letra do seu nome é:  ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `3 ultimas letras:  ${nome.slice(-3, nome.length)} <br />`;
document.body.innerHTML += `As palavras do seu nome são:  ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome em letras maiuscula:  ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome em minusculas:  ${nome.toLowerCase()} <br />`;
