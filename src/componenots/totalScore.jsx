import styled from "styled-components"


const TotalScore = ({score}) => {
    return (
        <>
            <ScoreContainer>
                <h1>{score}</h1>
                <p>Total Score </p>
            </ScoreContainer>
        </>
    )
}

export default TotalScore



const ScoreContainer = styled.div`
    max-width : 250px;
    text-align : center;
    height : 150px;
    

    h1{
        font-size : 85px;
        color : #000;
        line-height : 100px;
        margin: 0;

    }
    p{
        font-size :20px;
        font-weight : 800;
        margin: 0;
    }
`