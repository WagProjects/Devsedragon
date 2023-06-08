export class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao

    constructor(nome, level, tipo){
        this.nome = nome
        this.level = level
        this.tipo = tipo
        this.vida = 100
        this.mana = 100
    }
    
    obterInsignia(){
        if (this.level >= 5){
            return `${this.nome} é implacável ${this.tipo}`
        }
        return `${this.nome} é ${this.tipo} iniciante`
    }
}