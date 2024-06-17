import React, { Component } from 'react'

 class State1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
         this.clickHandler=this.clickHandler.bind(this);
     }
     clickHandler(){
       this.setState({
           count:this.state.count+1
       })  
     }
     
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default State1
