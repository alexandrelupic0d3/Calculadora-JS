class Calculator{

    constructor(){
        this.upperValue = document .querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }
    //metodo de soma
        sum(n1,n2){
            return = parseFloat=(n1) + parseFloat (n2)
        }

resolution(){
    //nós jogamos parauma array uma string
    let upperValuearray =  (this.upperValue.textContent).split("  ");
    result = Calc.sum(upperValuearray[i - 1], upperValuearray[i + 1]);
}

}
//start no btns
let buttons = document.querySelectorAll('.btn');
console.log(buttons);