import "./App.css"
import {useState} from "react"


function App(){

  const [count, setcount] = useState(0); 

  function plusCounter(){
    setcount(prev => prev + 1)
  }

  function lessCounte(){
    setcount(prev => prev - 1)
  }

  return(
    <div className="container">
      <button id="less" onClick={lessCounte}>-</button>
      <span>{count}</span>
      <button id="plus" onClick={plusCounter}>+</button>
    </div>
  )
}

export default App;
