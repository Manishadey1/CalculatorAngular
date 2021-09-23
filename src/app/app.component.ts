import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  operator: string
  numberSeven = "7"
  firstOperand = ""
  secondOperand = ""
  errorMessage = ""
  displayValue = ""
  // dotoperator: string | undefined
  operations = ['+', '-', '*','/']
  constructor() {
    this.operator = ""
  }


  calculate() {
    console.log('Calculate() triggered')
    if (this.operator != "") {
      let first = parseFloat(this.firstOperand)
      console.log("firstOperand.....", this.firstOperand);
      console.log("first..... ", first);
      
      let second = parseFloat(this.secondOperand)
      console.log("secondOperand.....", this.secondOperand);
      console.log("second.....", second);


      switch (this.operator) {
        case '+':
          this.displayValue = `${this.displayValue}=${first + second}`
          this.clearEverything()
          break;
        case '-':
          this.displayValue = `${this.displayValue}=${first - second}`
          this.clearEverything()
          break;
          case '*':
            this.displayValue = `${this.displayValue}=${first * second}`
            this.clearEverything()
            break;
            case '/':
              this.displayValue = `${this.displayValue}=${first / second}`
              this.clearEverything()
              break;
        default:
          break;
      }
    } else {
      this.errorMessage = "Please Add Operator"
    }
  }
  adddot(value: string){
    console.log("dot is clicked");
    // if(this.dotoperator == '.'){
      if( this.secondOperand != ""){
        this.secondOperand = `${this.secondOperand}${'.'}`
        console.log("secondOperand", this.secondOperand);
        // this.displayValue = this.displayValue;
      }else{
        this.firstOperand = `${this.firstOperand}${'.'}`
      }
      this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
  }

  addNumber(value: number) {
    this.errorMessage = ""
    if (this.operator != "") {
      // this.firstOperand += value;
      this.secondOperand += value
      this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`

    } 
    else {
      this.firstOperand += value
      this.displayValue = this.firstOperand
    }
    console.log('first', this.firstOperand)
    console.log('second', this.secondOperand)
  }

  addOperator(operator: string) {
    if (this.operator != "") {
      this.displayValue = `${this.displayValue.substring(1, this.displayValue.length - 1)}${operator}`
    } else {
      this.displayValue = `${this.displayValue}${operator}`
    }
    this.operator = operator

  }

  

  private clearEverything() {
    this.firstOperand = ""
    this.secondOperand = ""
    this.operator = ""
  }

  clearAll(){
    this.displayValue="";
    this.firstOperand = ""
    this.secondOperand = ""
    this.operator = ""
  }

clear(){
  console.log("button clicked");
  if( this.secondOperand != ""){
    this.secondOperand = this.secondOperand.slice(0, - 1);
    console.log("secondOperand", this.secondOperand);
    // this.displayValue = this.displayValue;
  }
  else if(this.operator){
    this.operator = this.operator.slice(0, - 1);
    console.log("this.operator", this.operator);
    // this.displayValue = this.displayValue.slice(0, - 1);

  }else{
    this.firstOperand = this.firstOperand.slice(0, - 1);
    console.log("this.firstOperand ", this.firstOperand );
  }
  this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
  
  }

  // // calculate2(inputElem: HTMLInputElement) {
  // //   console.log('value', inputElem.value)
  // //   let inputValue = inputElem.value
  // //   if (inputValue.endsWith("=")) {
  // //     this.operations.forEach((val, index) => {
  // //       if (inputValue.indexOf(val) != -1) {
  // //         this.addOperator(val)
  // //       }
  // //     })
  // //     this.firstOperand = inputValue.substring(0, inputValue.indexOf(this.operator))
  // //     this.secondOperand = inputValue.substring(inputValue.indexOf(this.operator) + 1, inputValue.length - 1)
  // //     this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
  // //     this.calculate()
  // //   }
  // // }
}
