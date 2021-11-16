function ValidaCPF(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo',{
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');//substitui tudo oq não for numero por nada
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    
};

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo);
cpf.valida();