import { useState } from "react"

function App() {
  const [color , setcolor] = useState()

  return (
    <div className="wrapper" style={{backgroundColor: color}}>
      <div className="bottombar">
        <div className="bottombar-item">
          <button style={{background:"red"}} onClick={() => setcolor("red")}>Red</button>
          <button style={{background:"green"}}onClick={() => setcolor("green")}>Green</button>
          <button style={{background:"blue"}}onClick={() => setcolor("blue")}>Blue</button>
        </div>
      </div>

    </div>
  )
}

export default App
