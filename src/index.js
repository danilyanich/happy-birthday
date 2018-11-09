import React from 'react';
import ReactDOM from 'react-dom';

import routes from './screens';

import * as serviceWorker from './serviceWorker';

import 'index.css';

class App extends React.PureComponent {
  state = {
    screen: routes.default,
  }

  componentDidMount() {
    const screen = window.localStorage.getItem('screen');
    screen && this.setState({ screen });
  }

  navigate = (screen) => {
    window.localStorage.setItem('screen', screen);
    this.setState({ screen });
  }

  render() {
    const Screen = routes[this.state.screen];

    return (
      <Screen navigate={this.navigate} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'development') {
  // serviceWorker.unregister();
  // localStorage.clear();
} else {
  serviceWorker.register();
}
