import React, { Component } from 'react'

 class Greet extends Component {
    
    render() {
    const {name,heroName}=this.props;
        return (
            
            <div>
                <h1>I am learning {name} and {heroName}</h1>
            </div>
        )
    }
}

export default Greet
