import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'
function CakeContainer(props) {
    return (
        <div>
            <h1>Number Of Cakes-{props.noOfCakes}</h1>
            <button onclick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        noOfCakes:state.noOfCakes
    }
}
const mapStateToDispatch=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default    connect(mapStateToProps,mapStateToDispatch)(CakeContainer)
