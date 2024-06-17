

import React  from 'react'
import Greet from '.src/Greet.js'
import ReactDOM from 'react-dom'

 class App2 extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Greet name="Ford" />
      </div>
    );
  }
}

ReactDOM.render(<App2 />, document.getElementById('root'));

