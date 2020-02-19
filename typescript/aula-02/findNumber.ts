function findNumber(num: number) : string {

    if(num < 0){
        return 'O seu número é negativo'

    }else{
        if(num > 0){
        return 'O seu número é positivo'

    }else{
            return 'O seu número é zero'

        }
    }
}

export default findNumber