class Heroi {
    constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }
    
    atacar() {
        let ataque;
    
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;  // Corrigido: ponto e vírgula
            default:
                ataque = 'ataque desconhecido';
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    
    }

const heroi1 = new Hero('Gandalf', 300, 'mago');
heroi1.atacar(); 