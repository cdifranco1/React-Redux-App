import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { coinReducer as reducer } from './reducer'

import CoinList from './components/CoinList'
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <CoinList />
    </Provider>
  );
}

export default App;
