class Coracao {

    constructor(
        public cheio: boolean,
        public urlCoracaoVazio: string = 'assets/img/heart-icon.png',
        public urlCoracaoCheio: string = 'assets/img/heart-icon-full.png'
    ){}

    public exibirCoracao(): string{
        if(this.cheio){
            return this.urlCoracaoCheio

        }else{
            return this.urlCoracaoVazio

        }

    }
}

export default Coracao