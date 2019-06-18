import React, { Component } from 'react'

class KeyPad extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <input value="AC" onClick={this.props.onClick} name="AC" id="AC" type="button" className="text-center btn btn-danger btn-block" />
                <table className="buttons" style={{ borderSpacing: '20px', width: '200px', marginTop: '25px' }} align="center">
                    <tr>
                        <td><input onClick={this.props.onClick} type="button" className="btn btn-block btn-primary" name="one" value="1" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="two" value="2" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="three" value="3" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-secondary" name="plus" value="+" /></td>
                    </tr>
                    <tr>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="four" value="4" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="five" value="5" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="six" value="6" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-secondary" name="minus" value="-" /></td>
                    </tr>
                    <tr>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="seven" value="7" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="eight" value="8" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="nine" value="9" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-secondary" name="multiply" value="*" /></td>
                    </tr>
                    <tr>
                        <td><input onClick={this.props.onClick} id="delete" type="button" className="btn  btn-block btn-primary" name="delete" value="C" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-primary" name="zero" value="0" /></td>
                        <td><input onClick={this.props.onClick} id="equal" className="btn  btn-block btn-success" type="button" name="equal" value="=" /></td>
                        <td><input onClick={this.props.onClick} type="button" className="btn  btn-block btn-secondary" name="divide" value="/" /></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default KeyPad;