import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/site-background-2.jpeg'})` }}>
              <Main />
          </div>
        </BrowserRouter>
      </Provider>
  );
  }
}


export default App;
