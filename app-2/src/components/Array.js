import React, { Component } from 'react';



class Array extends Component{
    constructor(){
        super()
    }


createList(){
    let list = this.props.dataArray.map(element => {
        return(
            <h2>{element}</h2>
        )
    })
    return list
}


render(){
    return (
        <h1>{this.createList()}</h1>
    )

}
   
}


export default Array;