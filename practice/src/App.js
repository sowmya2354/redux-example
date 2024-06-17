import React, { Component } from 'react'
import './App.css';
import State1 from './State1'
import Welcome from './Welcome'
import Greet from './Greet';
class App extends Component {
   render() {
    return (
        <div>
         <State1/>
         <Welcome name="sowmya" and heroName="sridhar"/>
       
          <Greet name="mauris" heroName="Terrace"/>
        </div>
    );
  }
}
export default App;


