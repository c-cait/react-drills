import React, { Component} from 'react';


class Image extends Component{
    render(){
      return (
        <div>
            <img src={this.props.source}></img>
            <p>rainbow</p>
        </div>
      )
    }
  }
  
  export default Image;