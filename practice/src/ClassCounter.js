import React, { Component } from 'react'
 class ClassCounter extends Component {
     constructor(props) {
        super(props);

        this.state = {
            count : 1,
            counter:1
        };
      
        
     this.increment=   this.increment.bind(this);
     this.decrement=this.decrement.bind(this);
     this.IncrementFive=this.IncrementFive.bind(this);
    }

    increment() {
        this.setState({
            count : this.state.count+1
        });
    }
    decrement(){
        this.setState({
            counter:this.state.counter+1
        });
    }
    IncrementFive(){
     this.setState({
         counter:this.counter-1
     });   
    }
        

    render() {
        return (
            <div>
              <button onClick={this.increment}>Count {this.state.count}</button><br/>

              <button onClick={this.decrement}>Count{this.state.counter}</button>
              <button onClick={this.IncrementFive}>Count {this.state.counter}</button>

            </div>
        );
        }
 }
export default ClassCounter
