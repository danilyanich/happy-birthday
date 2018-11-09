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

  background: linear-gradient(to right, #ff8008, #ffc837);
`;

const Button = styled.button`
  border: 1px solid #ffffff;
  border-radius: 10px;

  padding: 20px 30px;

  font-size: 20px;

  margin-top: 40px;
`;

const Text = styled.span`
  font-size: 25px;
  font-weight: 300;

  text-shadow: 0 0 150px rgba(0, 0, 0, 0.5);

  text-align: center;
`;

const Rules = ({ navigate }) => (
  <Main>
    <Text>
      По ходу игры ты столкнёшься с разными вопросами.
      <br/><br/>
      Тебе придётся ходить по городу, чтобы дать на них ответы.
      <br/><br/>
      Вопросы могут показаться сложными, но все ответы лежат на поверхности.
      <br/><br/>
      В конце игры тебя ждет сюрприз, ты готова?
    </Text>
    <Button onClick={() => navigate('game')}>
      Давай уже играть!
    </Button>
  </Main>
);

export default Rules;