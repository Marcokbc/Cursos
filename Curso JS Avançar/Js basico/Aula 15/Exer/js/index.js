const num = Number(prompt("Informe o seu numero: "));
const numI = document.getElementById('numero');
const info = document.getElementById('info');


numI.innerHTML = num;
info.innerHTML += `<p>A raiz quadrada é: ${num ** 0.5}</p><br/>`;
info.innerHTML += `<p>O numero é inteiro: ${Number.isInteger(num)}</p><br/>`;
info.innerHTML += `<p>É um NaN: ${Number.isNaN(num)}</p><br/>`;
info.innerHTML += `<p>Arrendodar para cima: ${Math.ceil(num)}</p><br/>`;
info.innerHTML += `<p>Arrendodar para baixo: ${Math.floor(num)}</p><br/>`;
info.innerHTML += `<p>Duas casas decimais: ${num.toFixed(2)}</p><br/>`;
