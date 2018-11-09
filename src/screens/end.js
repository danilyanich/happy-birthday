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

  background: linear-gradient(to bottom, #02aab0, #00cdac);
`;

const Text = styled.span`
  font-size: 25px;
  font-weight: 300;

  text-shadow: 0 0 150px rgba(0, 0, 0, 0.5);

  text-align: center;
`;

const End = ({ navigate }) => (
  <Main>
    <Text>
      Ты самый умный, самый лучший котик!
      <br/><br/>
      Ты справиласть со всеми заданиями!
      <br/><br/>
      Ты самая лучшая девушка на свете.
      <br/><br/>
      Беги скорее домой за сюрпризом, он спрятался и ждёт тебя!
    </Text>
  </Main>
);

export default End;