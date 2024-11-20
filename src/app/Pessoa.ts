// Define uma classe chamada 'Pessoa', que representa um modelo de dados para uma pessoa.
export class Pessoa { 
    // Declara uma propriedade `pessoaId` do tipo `number`, que provavelmente é o identificador único da pessoa.
    pessoaId: number; 

    // Declara uma propriedade `nome` do tipo `string`, que armazena o primeiro nome da pessoa.
    nome: string;

    // Declara uma propriedade `sobrenome` do tipo `string`, que armazena o sobrenome da pessoa.
    sobrenome: string;

    // Declara uma propriedade `idade` do tipo `number`, que armazena a idade da pessoa.
    idade: number;

    // Declara uma propriedade `profissao` do tipo `string`, que armazena a profissão da pessoa.
    profissao: string;

    // Define um construtor para a classe `Pessoa`, que é chamado ao criar uma nova instância da classe.
    constructor(pessoaId: number, nome: string, sobrenome: string, idade: number, profissao: string) { 
        // Inicializa a propriedade `pessoaId` com o valor fornecido no argumento do construtor.
        this.pessoaId = pessoaId; 

        // Inicializa a propriedade `nome` com o valor fornecido no argumento do construtor.
        this.nome = nome; 

        // Inicializa a propriedade `sobrenome` com o valor fornecido no argumento do construtor.
        this.sobrenome = sobrenome; 

        // Inicializa a propriedade `idade` com o valor fornecido no argumento do construtor.
        this.idade = idade; 

        // Inicializa a propriedade `profissao` com o valor fornecido no argumento do construtor.
        this.profissao = profissao; 
    }
}
