import styled from "styled-components"
import { Button } from "../styled/button";


const StartGame = ({ toggle }) => {
  return (
    <>
      <Container>
        <img src="/images/dices1.png" alt="logo" />
        <div className="content">
          <h1 className="text-animate">Dice Game</h1>
          <Button onClick={toggle}>Start Game</Button>
        </div>
      </Container>
    </>
  );
}

export default StartGame;


const Container = styled.div`
    max-width : 1180px;
    height : 95vh;
    display : flex;
    align-items : center;
    margin: 0 auto;

img{
  width : 600px
}

    .content{
      h1{
        font-size : 96px;
        font-weight: 900;
        white-space : nowrap;
      }


      .text-animate {
    animation: textAnimation 2s infinite alternate;
    text-shadow: 6px 0 0px 7px ;
}

@keyframes textAnimation {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-20px);
    }
}
    }
`