import React, { useEffect, useState } from 'react';
//import {useSelector,useDispatch} from 'react-redux'
import { connect } from 'react-redux'


const mapStateToProps = (state) => { 
return {

  count: state.counter
  
}}


 function Counter({ count, dispatch }) {

    const inc = ()=>{

      dispatch({type:"INCREMENT_ASYNC"})
    }

    const dec = ()=>{

      dispatch({type:"DECREMENT_ASYNC"})
    }
    
  return (
    <div>{count}
    
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    
    </div>
  )
}

export default connect(mapStateToProps) (Counter)
