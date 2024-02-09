import { useDispatch, useSelector } from "react-redux"



export function Counter_Redux() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch({
      type : "INCREMENT"
    })
  }

  const decrementHandler = () =>{
    dispatch({
      type : "DECREMENT"
    })
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
