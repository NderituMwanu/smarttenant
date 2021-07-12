import React from 'react'
import styled from "styled-components";

const main = () => {
    return (
        <Container>
            <h1> Hassle-Free Living </h1>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:50px;

    h1{
        font-size: 35ppx;
        font-weight: 900;
        color: red;

        @media (max-width: 900px){
            display: none;
        }
    }
`; 

export default main
