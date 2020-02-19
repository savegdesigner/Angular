function calcular(num1: number, num2: number, operation: string) : number{

    switch(operation){
        case '/':
            return num1 / num2
        break
        case '*':
            return num1 * num2
        break
        case '+':
            return num1 + num2
        break
        case '-':
            return num1 - num2
        break
        default:
            return 0
        break
    }

}

export default calcular