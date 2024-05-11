import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];


  const numberSelectorHandler = (value) =>{
    setSelectedNumber(value)
    setError("")
  }


  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber} // Change == to === for strict comparison
            key={i}
            onClick={() => numberSelectorHandler(value) }
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`

  display : flex;
  flex-direction : column;
  align-items : end;
  margin: 0;
  padding: 0;

  .error{
    color : red;
    font-weight : 200;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p{
    font-size : 24px;
    font-weight : 700;

  }
`;

const Box = styled.div`
  height: 62px;
  width: 62px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")}; // Add return statement
  color: ${(props) => (props.isSelected ? "white" : "black")}; // Add return statement
`;
