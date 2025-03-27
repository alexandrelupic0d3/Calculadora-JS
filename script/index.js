class Calculator{

    constructor(){
        this.upperValue = document .querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }
    //metodo de soma
        sum(n1,n2){
            return n1 + n2;
        }

    //metodo de subtração
        subtraction(n1,n2){
            return n1 - n2;
        }
    //metodo de divisão
        division(n1,n2){
            try {
                if (n2 === 0) {
                    throw new Error ('Erro 0')
                }
            
            return n1 / n2;
        } catch (error){
            return 'Erro: ${error.message}'; 

        }
    }
    //metodo de mutiplicação
        multiplication(n1,n2){
            return n1 * n2;
        }
}

//Criando o objeto
const calc = new Calculator;



//start no btns
let buttons = document.querySelectorAll('.btn');
console.log('teste');

//chamando metodo de soma
const resultadosoma = calc.sum(1,2);
console.log(resultadosoma);
//chamando metodo de subtração
const resultadosubtraçã = calc.subtraction(1,2);
console.log(resultadosubtraçã);
//chamando metodo de divisão
const resultadodivisão = calc.division(1,2);
console.log(resultadodivisão);
//chamando metodo de soma
const resultadomultiplicação = calc.multiplication(1,2);
console.log(resultadomultiplicação);