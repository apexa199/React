import React, { Component } from 'react'

export default class BuggyCounterError extends Component {
    constructor(props) {  
        super(props);  
        this.state = { counter: 0 };  
       
      }  
        
      handleClick =()=> {  
        this.setState(({counter}) => ({  
          counter: counter + 1  
        }));  
      }  
        
      render() {  
        if (this.state.counter === 3) {  
          throw new Error('I crashed!');  
        }  
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;  
      }  
}
