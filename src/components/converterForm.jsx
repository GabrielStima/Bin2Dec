import React, { Component } from 'react';
import '../assets/converterForm.css';

export default class components extends Component {
    constructor(){
        super();
        this.state={
            binaryInput:'',
            decimalInput:'',
            inputError:'',
            convertedValue:false
        }
        this.validateInput = this.validateInput.bind(this)
        this.validateConvertedValue = this.validateConvertedValue.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.converterBin2Dec = this.converterBin2Dec.bind(this)
    }
    validateInput(e){
        let target = e.target.value;
        const BinaryRegex = /^[0,1]+$/;
        if (!BinaryRegex.test(target)){
            this.setState({inputError:'Invalid value, please enter 0 or 1'})
        }else{
            this.setState({inputError:''})
            this.setState({binaryInput:target})
        }
    }

    validateConvertedValue(e){
        if(this.state.convertedValue){
            this.resetForm().then(e.target.value = '')
        }
    }

    async resetForm(){
        this.setState({
            binaryInput:'',
            decimalInput:'',
            inputError:'',
            convertedValue:false
        })
    }

    converterBin2Dec(){
        this.setState({convertedValue:true})
    }


  render() {
    return (
        <div className='form-converter'>
            <em className="error-input">{this.state.inputError}</em>
            <div className='form-body'>
                <div>
                    <p>Binary</p>
                    <input type="text" value={this.state.binaryInput} maxLength='8' onChange={this.validateInput} onClick={this.validateConvertedValue}/>
                </div>
                <div>
                    <p>Decimal</p>
                    <input type="text" value={this.state.decimalInput} disabled/>
                </div>
            </div>
            <div className='form-footer'>
                <button onClick={this.converterBin2Dec}>Converter</button>
                <button onClick={this.resetForm}>Reset</button>
            </div>
        </div>
    );
  }
}
