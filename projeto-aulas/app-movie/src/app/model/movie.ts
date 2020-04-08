class Movie {

    public nome: string
    public nota: number

    constructor(nome: string, nota: number){
        this.nome = nome
        this.nota = nota
    }

    getNome(): string{
        return this.nome

    }

    getNota(): number{
        return this.nota

    }
}

export default Movie