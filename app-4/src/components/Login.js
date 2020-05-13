import React, { Component } from 'react';


class Login extends Component{
    constructor(){
        super();
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }

    handleUsername(value){
        this.setState({
            usernameInput: value
        })
    }

    handlePassword(value){
        this.setState({
            passwordInput: value
        })
    }

    alertDisplay(){
        alert(`Username: ${this.state.usernameInput} Password: ${this.state.passwordInput}`)
    }

    render(){
        return (
            <div>
                <form>
                    <input
                    onChange = { (e) => {this.handleUsername(e.target.value)}}
                    ></input>

                    <input
                    onChange = { (e) => {this.handlePassword(e.target.value)}}
                    ></input>

                    <button
                    onClick= { () => {this.alertDisplay()}}
                    >Submit</button>
                </form>
            </div>
        )
    }


}

export default Login;