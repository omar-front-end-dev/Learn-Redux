import { useDispatch, useSelector } from "react-redux"
import { counterAction } from "../store/slices/counterSlice";

export function Counter_Redux_Toolkit() {

    const { increase, decrease } = counterAction
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.counter)

    const incrementHandler = () =>{
        dispatch( increase(4) )
       
    }
    
    const decrementHandler = () =>{
        dispatch( decrease(9) )
    } 
    


  return (
    <div className=" bg-light p-5 text-center">
      <h2>Counter Component</h2>
      <h1>Count : <span className="text-danger">{count}</span></h1>
      <button onClick={incrementHandler} className="btn btn-outline-success me-3">Increment</button>
      <button onClick={decrementHandler} className="btn btn-outline-danger me-3">Decrement</button>
    </div>
  )
}
