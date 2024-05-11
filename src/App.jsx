import { useState } from "react"
import StartGame from "./componenots/startGame"
import GamePlay from "./componenots/gamePlay"
function App() {


  const [isGameStarted, setIsGameStarted] = useState(false)


  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (<>    {isGameStarted ? <GamePlay /> : <StartGame


    toggle={toggleGamePlay}
  />}    </>)
}

export default App


