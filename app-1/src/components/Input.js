import React, { Component } from 'react';

class Input extends Component{
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    handleInput(value){
        this.setState({
            userInput: value
        })
    }

    render() {
        return (
            <div>
                <input 
                onChange = { (e) => {this.handleInput(e.target.value)}}
                ></input>
                
                <p>{this.state.userInput}</p>
                
            </div>
        )
    }

}

export default Input;