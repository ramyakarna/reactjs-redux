import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions'

function App() {
  const count=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  );
}

export default App;
