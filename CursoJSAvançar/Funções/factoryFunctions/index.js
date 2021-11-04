//factory function são funções que retornam objetos
//constructor function (função construtora)
function criaPessoa(nome,sobrenome,altura,peso){
    return{
        nome: nome,
        sobrenome: sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);  
        },

        fala: function(assunto){
            return `${nome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        //Se vc usa o get, ele passa a ser identificado como atributo, se não usasse teria de ser chamado como metodo. Getter
        get imc(){
            const indice = this.peso/(this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Marco', 'Meira', 1.75, 68);
console.log(p1.fala('falando'));
console.log(p1.imc);
p1.nomeCompleto = 'Marco Meira';
console.log(p1.nomeCompleto);