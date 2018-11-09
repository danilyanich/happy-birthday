import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background: linear-gradient(to top right, #5f2c82, #49a09d);
`;

const Button = styled.button`
  border: 1px solid #ffffff;
  border-radius: 10px;

  padding: 20px 30px;

  font-size: 20px;

  margin-top: 140px;
`;

const Text = styled.span`
  font-size: 60px;
  font-weight: 300;

  text-shadow: 0 0 150px rgba(0, 0, 0, 0.5);

  text-align: center;
`;

const Home = ({ navigate }) => (
  <Main>
    <Text>
      С днём рождения, котик!
      <br /><br />🐈🐋💖
    </Text>
    <Button onClick={() => navigate('rules')}>
      Начнём игру?
    </Button>
  </Main>
);

export default Home;