import Cell from "./components/Cell"
import { useEffect, useState } from "react"

const App =() => {

  const [cells, setCells] = useState(["","","","","","","","",""])
  const[go, setGo] = useState("circle")
  const [winningMsg, setWinnningMsg] = useState(null)

  const cellComponents = []
  const message = "Now goes " + go 

  useEffect(()=> {
    checkWin()
  }, [cells])
  const checkWin =() =>{
    console.log(cells)
    const winning = [
      [0,1,2], [3,4,5],[6,7,8],
      [0,3,6], [1,4,7],[2,5,8],
      [0,4,8], [2,4,6]
    ]

    winning.forEach(combination =>{
      let circleWins = combination.every(cell => cells[cell] === "circle")

      if (circleWins){
        setWinnningMsg("Circle has won")
        return
      }
    })

    winning.forEach(combination =>{
      let crossWins = combination.every(cell => cells[cell] === "cross")

      if (crossWins){
        setWinnningMsg("Cross has won")
        return
      }
    })

  }

  for (let i = 0; i < cells.length; i++) {
    cellComponents.push(<Cell 
      key={i} 
      id={i} 
      cell={cells[i]}
      setCells={setCells}
      go={go}
      setGo={setGo}
      cells={cells}
      winningMsg={winningMsg}/>)
  }

  return (
    <div className="app">
      <div className="gameboard">
        {cellComponents}
        <p>{winningMsg || message}</p>
      </div>
    </div>
  )
}

export default App;
