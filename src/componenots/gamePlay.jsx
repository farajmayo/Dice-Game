import styled from "styled-components";
import NumberSelector from "./numberSelector";
import TotalScore from "./totalScore";
import RollDice from "./rollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/button";
import Rules from "./rules";

const GamePlay = () => {


  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState("")
  const [showRules , SetShowRules] = useState(false)


  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  }


  const roleDice = () => {
    if (!selectedNumber) {
      setError("You Have Not Selected Any Number!")
      return
    }

    setError("")
    const randomNumber = generateRandomNumber(1, 7)

    setCurrentDice((prev) => randomNumber)



    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - randomNumber)

    }
    setSelectedNumber(undefined)
  }

  const resetScore = () =>{
    setScore(0)
  }



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice}
        roleDice={roleDice}
      />


      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score
        </OutlineButton>
        <Button
         onClick={()=> SetShowRules((prev) => !prev )} 
        >
{showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
    { showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding : 10px;
  padding-left: 70px;
  padding-right : 70px;

  .top_section {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    align-items: flex-end; /* Changed align-items value */
  }


  .btns{
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;


  }
`;


