import React from 'react';
import './App.css';
import CalculatorScreen from './components/calculatorScreen';
import KeyPad from './components/keyPad';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
    this.inputs = [];
    this.phepTinh = [];
    this.handleClick = this.handleClick.bind(this);
  }
  calculate(n1, operator, n2) {
    if (n2 === null) return n1;
    const firstNumber = parseFloat(n1);
    const secondNumber = parseFloat(n2);
    if (operator === '+') return firstNumber + secondNumber;
    if (operator === '-') return firstNumber - secondNumber;
    if (operator === '*') return firstNumber * secondNumber;
    if (operator === '/') return firstNumber / secondNumber;
  }
  //lay so hang chuc, hang tram...
  giveDigits(arr) {
    return arr.join('').match(/\d+/g).map(e => +e)
  }
  handleClick(e) {
    if (this.state.result.length > 8) {
      this.setState({ result: 'input overflow' })
    }
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const operators = ["plus", "minus", "multiply", "divide", "equal"];
    const operatorsSymbols = ["+", "-", "*", "/"];
    const newInputName = e.target.name;
    const newInputValue = e.target.value;
    this.inputs.push(newInputValue);
    //neu input la so
    if (numbers.includes(newInputName)) {
      //neu input trc do la phep tinh thi clear man hinh
      if (operatorsSymbols.includes(this.inputs[this.inputs.length - 2])) {
        this.setState({ result: '' });
        this.setState(prevState => ({ result: prevState.result + newInputValue }));
      }
      else {
        this.setState(prevState => ({ result: prevState.result + newInputValue }));
      }
    }
    //neu input la dau bang
    else if (newInputName === "equal") {
      const numbersInput = this.giveDigits(this.inputs);
      const result = this.calculate(numbersInput[0], this.phepTinh[0], numbersInput[1]);
      this.setState({ result });
      this.phepTinh = [];
      this.inputs = [];
      this.inputs[0] = result;
    }
    //neu input la phep tinh
    else if (operators.includes(newInputName)) {
      const numbersInput = this.giveDigits(this.inputs);
      this.phepTinh.push(newInputValue);
      let result;
      if (numbersInput.length === 1) {
        result = this.calculate(numbersInput[0], this.phepTinh[0], null);
      } else {
        result = this.calculate(numbersInput[0], this.phepTinh[0], numbersInput[1]);
        this.phepTinh = [];
        this.inputs = [];
        this.inputs[0] = result;
        this.phepTinh[0] = newInputValue;
      }
      this.setState({ result });
    }
    else if (newInputName === "delete") {
      if(typeof(this.inputs[0]) === 'number'){
        this.inputs[0] = this.inputs[0].toString();
        this.inputs[0] = this.inputs[0].split("");
      }
      this.inputs[0].pop();
      this.phepTinh.pop();
      this.setState({ result: this.state.result.toString().split("").slice(0, -1).join("") });
    }
    else if(newInputName === "AC"){
      this.inputs = [];
      this.phepTinh = []; 
      this.setState({result: ''});   
    }
  }

  render() {
    return (
      <>
      <h1 className="text-center">Calculator React</h1>
      <div className="App">
        <CalculatorScreen input={this.state.result} />
        <KeyPad onClick={this.handleClick} />
      </div>
      </>
    );
  }
}

export default App;
