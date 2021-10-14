const parentPara = document.querySelector('.paragrafos');
const paragrafos = parentPara.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const BackgroundBo = estilosBody.backgroundColor;

console.log(paragrafos);
for(let p of paragrafos){
    p.style.backgroundColor = BackgroundBo;
    p.style.color = 'white';
}
