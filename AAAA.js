//criando uma casse 
class animal{
    constructor(nome,cor){
        this.nome = nome
        this.cor = cor
    }
falar(){
    return `Olá, meu nome ${this.nome}.`
    }
}
// criando uma classe derivada de animal
class cachorro extends animal {
    constructor(nome,cor,raça){
        super(nome,cor);
        this.raça = raça
    }
    latir(){
        return`au au!`
    }
}

//criando uma classe derivada de animal 
class gato extends animal{
    constructor(nome,cor,raça){
        super(nome,raça)
        this.raça = raça
    }
miar(){
    return`miau!`
    }
}
// criando um array de animais 
const animais =[
new cachorro("rex","marrom","pastor alemão"),
new gato("mia","preto","siames")]
// percorrendo o array e imprimindo o nome e a cor de cada animal
for(const animal of animais){
    console.log(`o animal "${animal.nome}" é ${animal.cor}`);
}
// chamando o metodo "falar()" em cada animal
for(const animal of animais){
    console.log(animal.falar());
}
//chamando o metodo "latir()"no cachorro
const cachorro = animais[0];
console.log(cachorro.latir());
//chamando o metodo "miar()" no gato
const gato =animais[1]
console.log(gato.miar());