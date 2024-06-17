import React from 'react'
const Welcome= (props) =>

{
    const {name,heroName}=props
    console.log(props);
    return(
        <div>
           <h1>hello {name} and heroName is {heroName}</h1> 
           <p>{props.children}</p>
        </div>
    )
   
}
export default Welcome;