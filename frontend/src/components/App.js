import React from 'react'
import 'antd/dist/antd.css'
import styled from "styled-components";
import bgImg from '../assets/bg2.png'
import Sidebar from './Sidebar';
import Main from './Main';
// import Tenants from './containers/Tenants';

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background-image: url(${bgImg}); 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;

`
export default App