import React, { Component } from 'react'
const style = {
    textAlign: 'left',
    fontFamily: 'Ubuntu',    
    fontSize: '3rem',
    width: '250px',
    height: '50px',   
    border: 'none',
    backgroundColor: '#252525',
    color: '#fff',
    paddingRight: '20px',
    paddingLeft: '10px',
    borderRadius: '10%'
}
class CalculatorScreen extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <input value = {this.props.input} type="text" style={style} disabled />
            </div>
        )
    }
}
export default CalculatorScreen;
