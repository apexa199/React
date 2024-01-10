import React from 'react'
import { connect } from 'react-redux'



const mapStateToProps = (state) => { return {
    count: state.counter
  }}

  const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({type:"INCREMENT_ASYNC"}),
      decrement: () => dispatch({type:"DECREMENT_ASYNC"}),
      
    }
  }
 function Counter2({count,increment,decrement}) {
  return (
    <div>{count}
    
    <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter2)
