import React, { Component } from 'react';
import Array from './Array'


class Data extends Component{
    constructor(){
        super();
        this.state = {
            dataArray: ['happy', 'peaches', 'chana dal', 'love', 'sunny']
            
        }

        
    }



    render(){
        return(
            <div>
                < Array dataArray={this.state.dataArray}/>
            </div>
        )
    }
}

export default Data;