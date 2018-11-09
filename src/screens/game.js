import React from 'react';
import styled from 'styled-components';

import { findDataByProgress, getAllCount, getCompletedCount } from 'chapters';

const Main = styled.form`
  width: 100vw;
  height: 100vh;

  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background: linear-gradient(to bottom right, #de6262, #ffb88c);
`;

const Text = styled.span`
  font-size: 25px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid #ffffff;
  border-radius: 10px;

  align-self: stretch;
  padding: 20px 30px;

  font-size: 20px;

  margin-top: 40px;

  background-color: transparent;
`;

const TopText = styled.span`
  align-self: flex-start;

  margin-bottom: 10px;
`;

class Game extends React.PureComponent {
  state = {
    progress: [],
    answer: '',
  }

  componentDidMount() {
    const progress = window.localStorage.getItem('progress');
    try {
      progress && this.setState({ progress: JSON.parse(progress) });
    } catch (error) {}
  }

  markAsComplete = (completeChapter) => {
    const newProgress = [...this.state.progress, completeChapter];
    window.localStorage.setItem('progress', JSON.stringify(newProgress));
    this.setState({ progress: newProgress, answer: '' });
  }

  verifyAnswer = (answer) => {
    return this.state.answer.toLowerCase() === answer.toLowerCase();
  }

  checkAnswer = (event, currentChapter) => {
    event.preventDefault();
    event.stopPropagation();

    if (this.verifyAnswer(currentChapter.answer)) {
      this.markAsComplete(currentChapter.key)
    } else {
      alert('Ну не совсем 🙈');
    }
  }

  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  }

  render() {
    const currentChapter = findDataByProgress(this.state.progress);

    if (!currentChapter) {
      this.props.navigate('end');
      return null;
    }

    return (
      <Main onSubmit={(event) => this.checkAnswer(event, currentChapter)}>
        <TopText>{getCompletedCount(this.state.progress)} / {getAllCount()}</TopText>
        <Text>{currentChapter.text}</Text>
        <Input
          value={this.state.answer}
          onChange={this.handleChange}
          placeholder="Твой ответ..."
        />
      </Main>
    );
  }
}

export default Game;