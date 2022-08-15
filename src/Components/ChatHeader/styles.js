import styled from "styled-components";

export const Container = styled.div`
height: 50px; 
background-color: #f0f2f5;
padding: 10px 16px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 5px;
box-shadow: 0 .5px #c4c4c4;
`;

export const userInfo = styled.div`
 display: flex;
 align-items: center;

 svg {
    width: 35px;
    height: 35px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 20px;
    min-width: fit-content;
 }
`;

export const NameContent = styled.div`
display: grid;
`;

export const Name = styled.span`
font-size: 18px;
overflow: hidden;
text-overflow: ellipsis;
`;

export const Avatar = styled.img`
width: 35px;
height: 35px;
cursor: pointer;
border-radius: 50%;
margin-right: 20px;
`;

export const Options = styled.div`
display: flex;
gap: 10px; 

svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
}
`;