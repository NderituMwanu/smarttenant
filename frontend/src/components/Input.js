import React from 'react';
import styled from 'styled-components';

const input = ({ type, placeholder }) => {
    return (
        <Container>
            <StyledInput placeholder={placeholder && placeholder} 
                type={type ? type: "text"}
                required
                autocomplete="off"
            />
            <Status />
        </Container>
    );
};

const StyledInput = styled.input`
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    margin: 0.5rem 0;
    border: none;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;


    &:hover {
        transform: translateY(-3px);
    }
`;
 
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Status = styled.div`
    height: 10px;
    width: 10px;
    background: #9d9d9d;
    border-radius: 10px;
    margin-left: 1rem;

    ${StyledInput}:focus + & {
        background: green;
    }
    ${StyledInput}:invalid + & {
        background: red;
    }
    ${StyledInput}:valid + & {
        background: lime;
    }
`;

export default input
