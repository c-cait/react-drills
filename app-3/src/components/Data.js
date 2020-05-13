import React, { Component } from 'react';
import Array from './Array'


class Data extends Component{
    constructor(){
        super();
        this.state = {
            dataArray: ['happy', 'peaches', 'chana dal', 'love', 'sunny'],
            filteredArray: [],
            userInput: ''
        }
    
    }

    componentDidMount(){
        let filteredList = this.state.dataArray.filter(element => {
            if(element.includes(this.state.userInput)){
                return element
            }
        })
        this.setState({
          filteredArray: filteredList
        })
    }

    handleInput(value){
        let filteredList = this.state.dataArray.filter(element => {
            if(element.includes(value)){
                return element
            }
        })
        this.setState({
            userInput: value,
            filteredArray: filteredList
        })
    }

    render(){
        return(
            <div>
                <input
                onChange = { (e) => {this.handleInput(e.target.value)}}
                ></input>

                < Array dataArray={this.state.dataArray} filteredArray={this.state.filteredArray}/>
            </div>
        )
    }
}

export default Data;