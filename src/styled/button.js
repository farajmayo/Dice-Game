import styled from "styled-components"

export const Button = styled.button`
    background-color : black;
    color : white;
    display : flex;
    font-size : 16px;
    justify-content : center;
    align-items : center;
    border-radius : 10px;
    padding : 10px 18px;
    margin : 10px;
    min-width : 220px;
    border: none;
    border : 1px solid transparent;
    transition : 0.4s background ease-in;


    
&:hover{
 background-color : white;
 color : black;
 border : 1px solid black;
 cursor : pointer;
 transition : 0.3s background ease-in;
}`


export const OutlineButton = styled(Button)`
background-color : white;
color : black;
border : 1px solid black;
    &:hover{
 background-color : black;
 color : white;
 border : 1px solid transparent;
 cursor : pointer;
        
}

`
