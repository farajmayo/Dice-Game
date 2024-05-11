import styled from "styled-components";

const RollDice = ({currentDice , roleDice}) => {


    

    return (
        <DiceContainer>
            <div className="dice"
                onClick={roleDice}

            > <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click On Dice To Roll</p>
        </DiceContainer>
    );
}

export default RollDice;

const DiceContainer = styled.div`

    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 10px;
    div{    
        img{
            width : 150px;
            cursor : pointer;
        }
    }

    .dice{
        cursor : pointer;
    }

    p{
        font-size : 14px;
        font-weight : 800;
        margin: 0;
    }
`