import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How To Play Dice Game</h2>
     <div className="text">
      <p>
       Select any number .</p>
     <p>  Click on dice image</p>
     <p>  after click on dice if selected number is equal to dice number you will get same point as dice {" "}  </p> 
     <p>  if you get wrong guess then  2 point will be dedcuted     </p>
      </div>
    </RulesContainer>
  );
}

export default Rules;


const RulesContainer = styled.div`
background-color: #fbf1f1;
padding: 2px;
max-width: 700px;
margin:auto;
border-radius : 15px;

.text{
    padding-left : 10px;
    padding-bottom : 5px;
}

h2{
    font-size : 24px;
    font-weight : bold;
    padding-left : 10px;

}
p{
    margin: 3px;
    font-weight : 600;
}

`