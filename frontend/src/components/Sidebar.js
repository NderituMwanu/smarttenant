import React from 'react'
import styled from "styled-components";
import logo from "../assets/logo2.svg";
import Input from './Input';

const sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo}alt="" />
            </LogoWrapper>
            <Form>
                <h3>Sign Up</h3>
                <Input placeholder="First Name" />
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <button>Sign Up</button>
            </Form>
            <div>
                <Terms>
                    By signing up i agree to the Privacy Policy <br /> and the Terms of service
                </Terms>
                <h4>
                    Already a tenant? <span>Sign In Here</span>
                </h4>
            </div>
        </Container>
    );
};



const Terms = styled.div`
    padding: 0rem;
    text-align: center;
    font-size: 10px;
    color: #808080;
    font-weight: 300px;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    button {
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: lime;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;
 
        &:hover {
            transform: translateY(-3px);
        }
    }
`;


const LogoWrapper = styled.div`
    img {
        height: 2rem;
    }
`;

const Container = styled.div`
    min-width:550px;
    backdrop-filter: blur(45px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;


    @media (max-width: 900px) {
        width: 100vw;
        position: absolute;
        padding: 0;
    }

    h4 {
        font-size: 13px;
        color: #808080;
        font-weight: bold;
        margin-top: 2rem;

        span {
            color: pink;
            cursor: pointer;
        }
    }
`;

export default sidebar
