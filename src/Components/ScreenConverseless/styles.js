import styled from "styled-components";

export const Container = styled.div`
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
background-color: white;
padding-top: 15%;

svg {
    width: 100px;
    height: 100px;
    color: blue;
}

span{
    text-align: center;
    font-size: larger;
    padding-top: 10px;
    font-weight: 400;
}
`;

export const BoxRow = styled.div`
flex-direction: row;
align-items: center;
display: flex;
justify-content: center;
`;

export const BoxColuna = styled.div`
flex-direction: column;
align-items: center;
display: flex;
justify-content: center;
`;

