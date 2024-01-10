  
import { connect } from 'react-redux'

export const increment = () => ({type:"INCREMENT_ASYNC"});
export const decrement = () => ({type:"DECREMENT_ASYNC"});

const mapStateToProps = (state) => {
    return {
      count: state.conuter
    }
  }

 function Counter3({props}) { 

 
  return (
    <div>
        
        {props.count}
    
        <button onClick={() => {props.increment()}}>+</button>
        <button onClick={() => {props.decrement()}}>-</button>
    
    </div>
  )
}

export default connect(mapStateToProps,{increment,decrement}) (Counter3)
