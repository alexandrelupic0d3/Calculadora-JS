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
}

//Criando o objeto
const calc = new Calculator;



//start no btns
let buttons = document.querySelectorAll('.btn');
console.log(buttons);

const resultado = calc.sum(1,2);
console.log(resultado);